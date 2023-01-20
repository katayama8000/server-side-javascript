import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser() {
    return {
      name: 'John Doe',
      age: 42,
    };
  }
}
