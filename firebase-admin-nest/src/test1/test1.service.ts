import { Injectable } from '@nestjs/common';

@Injectable()
export class Test1Service {
  constructor() {
    console.log('constructor');
  }
  getUser() {
    return {
      name: 'john',
      age: 20,
      country: 'USA',
    };
  }
}
