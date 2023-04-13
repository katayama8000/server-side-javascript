import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AudioService {
  //   constructor(@InjectQueue('audio') private audioQueue: Queue) {}
  async getAudio() {
    return 'audio';
  }

  async addAudio() {
    // const job = await this.audioQueue.add({
    //   foo: 'bar',
    // });
    // console.log(job);
  }
}
