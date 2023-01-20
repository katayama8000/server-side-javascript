import { Controller, Get } from '@nestjs/common';
import { Test2Service } from 'src/test2/test2.service';
import { Test1Service } from './test1.service';

@Controller('test1')
export class Test1Controller {
  constructor(private readonly test1Service: Test1Service) {}
  test2Service = new Test2Service();
  @Get()
  getUser() {
    return this.test1Service.getUser();
  }

  //   test1Service = new Test1Service();
  //   @Get()
  //   getUser() {
  //     return this.test1Service.getUser();
  //   }
  @Get('test2')
  getUserTest2() {
    return this.test2Service.getUser;
  }
}
