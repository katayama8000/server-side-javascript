import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp } from 'firebase-admin/app';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import http2 = require('node:http2');

async function bootstrap() {
  initializeApp();
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Doctormate API documentation')
    .setDescription('The Doctormate API description')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
