import { Controller, Get } from '@nestjs/common';
import { AudioService } from './audio.service';

@Controller('audio')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}
  //   @Get('/')
  //   async getAudio() {
  //     return await this.audioService.getAudio();
  //   }

  //   @Get('/add')
  //   async addAudio() {
  //     return await this.audioService.addAudio();
  //   }
}
