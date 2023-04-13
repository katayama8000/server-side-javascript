import { Module } from '@nestjs/common';
import { BullController } from './bull.controller';
import { BullService } from './bull.service';

@Module({
  controllers: [BullController],
  providers: [BullService]
})
export class BullModule {}
