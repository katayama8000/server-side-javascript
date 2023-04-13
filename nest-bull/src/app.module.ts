import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { AudioModule } from './audio/audio.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
      limiter: {
        max: 1,
        duration: 1000,
      },
    }),
    AudioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
