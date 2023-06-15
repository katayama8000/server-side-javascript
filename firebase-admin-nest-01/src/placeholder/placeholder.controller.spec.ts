import { Test, TestingModule } from '@nestjs/testing';
import { PlaceholderController } from './placeholder.controller';
import { PlaceholderService } from './placeholder.service';
import { user } from './constant/user.const';
import { post1 } from './constant/post1.const';

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

  test('placeholder/1で戻り値の確認', async () => {
    const mockGetComments = jest
      .spyOn(PlaceholderService.prototype, 'getComments')
      .mockResolvedValue(Promise.resolve(post1));

    expect(await controller.getComments(1)).toBe(post1);
    expect(mockGetComments).toHaveBeenCalled();
    expect(mockGetComments).toHaveBeenCalledWith(1);
  });

  test('placeholderでpostの確認', async () => {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const mockTryPost = jest
      .spyOn(PlaceholderService.prototype, 'tryPost')
      .mockResolvedValue(Promise.resolve(data));

    expect(await controller.tryPost(data)).toStrictEqual({
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    expect(mockTryPost).toHaveBeenCalled();
    expect(mockTryPost).toHaveBeenCalledWith(data);
  });
});
