import { Injectable, NotFoundException } from '@nestjs/common';
import { Test1Service } from './test1/test1.service';
import { Test2Service } from './test2/test2.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  error404() {
    throw new NotFoundException('404test');
  }

  getAge() {
    return new Test1Service(new Test2Service()).getAge();
  }
}
