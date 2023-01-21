import { Injectable } from '@nestjs/common';

@Injectable()
export class Test2Service {
  getAge() {
    return { age: 20 };
  }
}
