import { Test, TestingModule } from '@nestjs/testing';
import { PlaceholderController } from './placeholder.controller';
import { PlaceholderService } from './placeholder.service';
import { UserIntercafe } from './interface/user.interface';
import { user } from './constant/user.const';

describe('PlaceholderController', () => {
  let controller: PlaceholderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaceholderController],
      providers: [PlaceholderService],
    }).compile();

    controller = module.get<PlaceholderController>(PlaceholderController);
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
