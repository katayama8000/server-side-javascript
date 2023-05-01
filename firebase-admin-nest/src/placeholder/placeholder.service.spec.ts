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
    // const mockGetUser = jest
    //   .spyOn(PlaceholderService.prototype, 'getUser')
    //   .mockResolvedValue(Promise.resolve(user));

    expect(await service.getUser()).toStrictEqual(user);
  });
});
