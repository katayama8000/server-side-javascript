import { Test, TestingModule } from '@nestjs/testing';
import { Auth01Service } from './auth01.service';

describe('Auth01Service', () => {
  let service: Auth01Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Auth01Service],
    }).compile();

    service = module.get<Auth01Service>(Auth01Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
