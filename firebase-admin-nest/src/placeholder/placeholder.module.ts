import { Module } from '@nestjs/common';
import { PlaceholderService } from './placeholder.service';

@Module({
  providers: [PlaceholderService],
})
export class PlaceholderModule {}
