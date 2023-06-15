import { Controller, Get } from '@nestjs/common';
import { Test2Service } from 'src/TestNest/test1/test2/test2.service';
import { Test1Service } from './test1.service';

@Controller('test1')
export class Test1Controller {
  //   @Get('age')
  //   getAge() {
  //     return new Test1Service(new Test2Service()).getAge();
  //   }

  constructor(private readonly test1Service: Test1Service) {}

  @Get('age')
  getAge() {
    return this.test1Service.getAge();
  }
}
