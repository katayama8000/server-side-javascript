import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from './bull/bull.module';

@Module({
  imports: [BullModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
