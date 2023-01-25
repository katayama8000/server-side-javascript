import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

// テスト書いて
describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return all users', () => {
    expect(service.getAllUsers()).toBeDefined();
  });

  it('should be return user by id', () => {
    expect(service.getUserById(1)).toBeDefined();
  });

  it('should be return user by username', () => {
    expect(service.getUsersByUsername('test')).toBeDefined();
  });
});
