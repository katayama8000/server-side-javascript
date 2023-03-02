import { Injectable, NotFoundException } from '@nestjs/common';
import { Test1Service } from './TestNest/test1/test1.service';
import { Test2Service } from './TestNest/test1/test2/test2.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Nest!';
  }

  error404() {
    throw new NotFoundException('404test');
  }

  getAge() {
    return new Test1Service(new Test2Service()).getAge();
  }
}
