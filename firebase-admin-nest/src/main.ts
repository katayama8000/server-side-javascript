import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp } from 'firebase-admin/app';

async function bootstrap() {
  initializeApp();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
