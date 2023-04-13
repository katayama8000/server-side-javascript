import { Injectable } from '@nestjs/common';

@Injectable()
export class AudioService {
  async getAudio() {
    return 'audio';
  }
}
