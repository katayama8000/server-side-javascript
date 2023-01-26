import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../src/users/entities/user.entity';
import { UsersModule } from '../src/users/users.module';
import { generateCreateUserDto } from './faker/users-faker';
import { ErrorResponse } from './type/http';
import { UpdateUserDto } from '../src/users/dto/update-user.dto';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        UsersModule,
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: process.env.DB_FILENAME,
          entities: [User],
          synchronize: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('can get user has specific id', async () => {
    const expected = await postUser(app);
    const getAllRes: { body: User[] } = await request(app.getHttpServer())
      .get(`/users/${expected.id}`)
      .expect(200);

    expect(getAllRes.body).toEqual(expected);
  });

  it('should return 404 if specified id does not exist.', async () => {
    const getRes: { body: ErrorResponse } = await request(app.getHttpServer())
      .get('/users/9999999999999')
      .expect(404);

    expect(getRes.body.error).toBe('Not Found');
    expect(getRes.body.message).toBe("Specified user doesn't exists");
    expect(getRes.body.statusCode).toBe(404);
  });

  it('can persist one user', async () => {
    const postRes = await request(app.getHttpServer())
      .post('/users')
      .send(generateCreateUserDto())
      .expect(201);

    const expected = postRes.body;

    const getAllRes: { body: User[] } = await request(app.getHttpServer())
      .get('/users')
      .expect(200);

    expect(getAllRes.body.length).toBe(1);
    expect(getAllRes.body[0]).toEqual(expected);
  });

  it('can persist multiple users', async () => {
    const expected: User[] = [];
    for (let i = 0; i < 3; i++) {
      expected.push(await postUser(app));
    }

    const getAllRes: { body: User[] } = await request(app.getHttpServer())
      .get('/users')
      .expect(200);

    expect(getAllRes.body.length).toBe(3);
    expect(getAllRes.body[0]).toEqual(expected[0]);
    expect(getAllRes.body[1]).toEqual(expected[1]);
    expect(getAllRes.body[2]).toEqual(expected[2]);
  });

  it('can update specific user', async () => {
    const created = await postUser(app);

    const updateData: UpdateUserDto = {
      firstName: 'modified first name',
      lastName: 'modified last name',
      isActive: false,
    };

    const putRes: { body: User } = await request(app.getHttpServer())
      .put(`/users/${created.id}`)
      .send(updateData)
      .expect(200);

    expect(putRes.body).toEqual(expect.objectContaining(updateData));
  });

  it('should return 404 if specified update target id does not exist.', async () => {
    const updateData: UpdateUserDto = {
      firstName: 'modified first name',
      lastName: 'modified last name',
      isActive: false,
    };

    const putRes: { body: ErrorResponse } = await request(app.getHttpServer())
      .put('/users/9999999999')
      .send(updateData)
      .expect(404);

    expect(putRes.body.error).toBe('Not Found');
    expect(putRes.body.message).toBe("Specified user doesn't exists");
    expect(putRes.body.statusCode).toBe(404);
  });

  it('can delete specific user', async () => {
    const deleteTarget = await postUser(app);

    await request(app.getHttpServer())
      .delete(`/users/${deleteTarget.id}`)
      .expect(204);

    await request(app.getHttpServer())
      .get(`/users/${deleteTarget.id}`)
      .expect(404);
  });

  it('should return 404 if specified delete target id does not exist.', async () => {
    const deleteRes = await request(app.getHttpServer())
      .delete('/users/99999999999999')
      .expect(404);

    expect(deleteRes.body.error).toBe('Not Found');
    expect(deleteRes.body.message).toBe('Specified user id does not exists.');
    expect(deleteRes.body.statusCode).toBe(404);
  });

  // MEMO CloseしないとJestが終了しない
  afterEach(async () => {
    await app.close();
    await moduleFixture.close();
  });
});

async function postUser(app: INestApplication): Promise<User> {
  const postRes1 = await request(app.getHttpServer())
    .post('/users')
    .send(generateCreateUserDto());

  return postRes1.body;
}
