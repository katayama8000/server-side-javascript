import { Injectable } from '@nestjs/common';

@Injectable()
export class Test1Service {
  constructor() {
    console.log('constructor');
  }
  getName() {
    return { name: 'john' };
  }
}
