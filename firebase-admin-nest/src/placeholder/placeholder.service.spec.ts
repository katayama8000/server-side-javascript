import { Test, TestingModule } from '@nestjs/testing';
import { PlaceholderService } from './placeholder.service';
import { user } from './constant/user.const';

describe('PlaceholderService', () => {
  let service: PlaceholderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlaceholderService],
    }).compile();

    service = module.get<PlaceholderService>(PlaceholderService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('should render user', async () => {
    expect(await service.getUser()).toStrictEqual(user);
  });

  test('should work post corectly', async () => {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    expect(await service.tryPost(data)).toStrictEqual({
      id: 101,
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
  });
});
