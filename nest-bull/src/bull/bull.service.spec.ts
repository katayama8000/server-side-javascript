import { Test, TestingModule } from '@nestjs/testing';
import { BullService } from './bull.service';

describe('BullService', () => {
  let service: BullService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BullService],
    }).compile();

    service = module.get<BullService>(BullService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
