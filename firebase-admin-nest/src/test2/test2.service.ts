import { Injectable } from '@nestjs/common';

@Injectable()
export class Test2Service {
  constructor() {
    console.log('test2');
  }
  getUser() {
    return {
      name: 'honoka',
      age: 20,
      country: 'Japan',
    };
  }
}
