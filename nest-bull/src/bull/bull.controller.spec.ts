import { Test, TestingModule } from '@nestjs/testing';
import { BullController } from './bull.controller';

describe('BullController', () => {
  let controller: BullController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BullController],
    }).compile();

    controller = module.get<BullController>(BullController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
