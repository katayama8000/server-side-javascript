import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { faker } from '@faker-js/faker';
import { NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  generateCreateUserDto,
  generateMockUser,
  toUserEntity,
} from '../../test/faker/users-faker';

describe('UsersController', () => {
  let mockRepository: Repository<User>;
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    mockRepository = module.get<Repository<User>>(getRepositoryToken(User));
    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll method returns users array.', async () => {
    const expected = generateMockUser(3);
    jest.spyOn(mockRepository, 'find').mockImplementation(async () => expected);

    const res = await controller.findAll();
    expect(res.length).toBe(3);
    expect(res).toEqual(expected);
  });

  it('findOne method throws not found error when specified user does not exists.', async () => {
    jest.spyOn(mockRepository, 'findOne').mockImplementation(async () => null);

    expect.assertions(1);
    await expect(
      async () => await controller.findOne('1234567890'),
    ).rejects.toThrow(NotFoundException); // https://jestjs.io/docs/asynchronous#resolves--rejects
  });

  it('findOne method returns a user.', async () => {
    const user = generateMockUser().pop();
    user.id = 123;

    jest.spyOn(mockRepository, 'findOne').mockImplementation(async () => user);

    expect(await controller.findOne(user.id.toString())).toEqual(user);
  });

  it('create method returns user entity when user is successfully created.', async () => {
    jest
      .spyOn(mockRepository, 'save')
      .mockImplementation(async (dto) => toUserEntity(dto));

    const dto = generateCreateUserDto();
    expect(await controller.create(dto)).toEqual(expect.objectContaining(dto));
  });

  it('update method throws not found error when specified user does not exists.', async () => {
    jest
      .spyOn(mockRepository, 'update')
      .mockImplementation(async (id, dto) => ({
        raw: null,
        affected: 0,
        generatedMaps: [],
      }));

    const dto = generateCreateUserDto();

    expect.assertions(1);
    await expect(
      async () => await controller.update('1234567890', dto),
    ).rejects.toThrow(NotFoundException); // https://jestjs.io/docs/asynchronous#resolves--rejects
  });

  it('update method executed successfully.', async () => {
    jest
      .spyOn(mockRepository, 'update')
      .mockImplementation(async (id, dto) => ({
        raw: id,
        affected: 1,
        generatedMaps: [dto],
      }));

    jest
      .spyOn(mockRepository, 'findOne')
      //@ts-ignore
      .mockImplementation(async ({ where: { id } }: FindOneOptions<User>) => {
        const user = generateMockUser().pop();
        user.id = id;

        return user;
      });

    const user: User = generateMockUser().pop();
    const dto: UpdateUserDto = { firstName: faker.name.firstName() };
    const res = await controller.update(user.id.toString(), dto);
    expect(res.id).toEqual(user.id);
  });

  it('remove method throws not found error when specified user does not exists.', async () => {
    jest.spyOn(mockRepository, 'softDelete').mockImplementation(async (id) => ({
      raw: null,
      affected: 0,
      generatedMaps: [],
    }));

    expect.assertions(1);
    await expect(
      async () => await controller.remove('1234567890'),
    ).rejects.toThrow(NotFoundException);
  });

  it('remove method executed successfully.', async () => {
    jest.spyOn(mockRepository, 'softDelete').mockImplementation(async (id) => ({
      raw: id,
      affected: 1,
      generatedMaps: [],
    }));

    const res = await controller.remove('1234567890');
    expect(res);

    expect(await controller.remove('1234567890')).toBeUndefined();
  });
});
