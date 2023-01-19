import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  error404() {
    throw new NotFoundException('404test');
  }
}
