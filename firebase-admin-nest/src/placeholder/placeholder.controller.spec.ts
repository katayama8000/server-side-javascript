import { Test, TestingModule } from '@nestjs/testing';
import { PlaceholderController } from './placeholder.controller';
import { PlaceholderService } from './placeholder.service';
import { user } from './constant/user.const';

// jest.mock('./placeholder.service');

describe('PlaceholderController', () => {
  let controller: PlaceholderController;
  let service: PlaceholderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaceholderController],
      providers: [PlaceholderService],
    }).compile();

    controller = module.get<PlaceholderController>(PlaceholderController);
    service = module.get<PlaceholderService>(PlaceholderService);
  });

  test('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('should render user', async () => {
    // mock
    const mockGetUser = jest
      .spyOn(PlaceholderService.prototype, 'getUser')
      .mockResolvedValue(Promise.resolve(user));
    expect(await controller.getUser()).toBe(user);
    expect(mockGetUser).toHaveBeenCalled();
  });

  test('userのエンドポイントでAPIが呼ばれること', async () => {
    const mockGetUser = jest
      .spyOn(PlaceholderService.prototype, 'getUser')
      .mockResolvedValue(Promise.resolve(user));

    expect(await controller.getUser()).toBe(user);
    expect(mockGetUser).toHaveBeenCalled();
  });
});
