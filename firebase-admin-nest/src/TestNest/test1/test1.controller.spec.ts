import { Test, TestingModule } from '@nestjs/testing';
import { Test1Controller } from './test1.controller';

describe('Test1Controller', () => {
  let controller: Test1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Test1Controller],
    }).compile();

    controller = module.get<Test1Controller>(Test1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
