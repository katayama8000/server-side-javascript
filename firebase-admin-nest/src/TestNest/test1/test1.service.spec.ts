import { Test, TestingModule } from '@nestjs/testing';
import { Test1Service } from './test1.service';

describe('Test1Service', () => {
  let service: Test1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test1Service],
    }).compile();

    service = module.get<Test1Service>(Test1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
