import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

// テスト書いて
describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);

    // DBにデータを格納
    await service.createUser({
      username: 'test',
      password: '123456789',
      email: 'test@gmail.com',
    });
  });
  // userをするテストを追加
  test('should return user', async () => {
    // testの期待値を定義
    const expectedUser: CreateUserDto = {
      username: 'test',
      password: '123456789',
      email: 'test@gmail.com',
    };

    // const user = await service.getUserById(1);
    // console.log(user);
    expect(expectedUser).toBe(expectedUser);
  });
});
