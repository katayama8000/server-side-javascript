import { Injectable } from '@nestjs/common';
import { Test2Service } from 'src/TestNest/test1/test2/test2.service';

@Injectable()
export class Test1Service {
  constructor(private readonly test2Service: Test2Service) {
    console.log('constructor');
  }
  getName() {
    return { name: 'john' };
  }

  //test2Service = new Test2Service();
  getAge() {
    return this.test2Service.getAge();
  }
}
