import { Controller, Get } from '@nestjs/common';
import { BullService } from './bull.service';

@Controller('bull')
export class BullController {
  constructor(private readonly bullService: BullService) {}
  @Get('/')
  getBull() {
    return this.bullService.getBull();
  }
}
