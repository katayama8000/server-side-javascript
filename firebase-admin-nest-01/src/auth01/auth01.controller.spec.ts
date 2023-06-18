import { Test, TestingModule } from '@nestjs/testing';
import { Auth01Controller } from './auth01.controller';

describe('Auth01Controller', () => {
  let controller: Auth01Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Auth01Controller],
    }).compile();

    controller = module.get<Auth01Controller>(Auth01Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
