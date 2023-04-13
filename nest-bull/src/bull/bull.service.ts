import { Injectable } from '@nestjs/common';

@Injectable()
export class BullService {
  getBull() {
    return 'This action returns all bull';
  }
}
