import { Test, TestingModule } from '@nestjs/testing';
import { Test2Service } from './test2.service';

describe('Test2Service', () => {
  let service: Test2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Test2Service],
    }).compile();

    service = module.get<Test2Service>(Test2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
