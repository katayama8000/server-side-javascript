import { NestFactory } from '@nestjs/core';
import spdy = require('spdy');
import { ExpressAdapter } from '@nestjs/platform-express';
import express = require('express');
import { AppModule } from './app.module';

const options = {
  spdy: {
    protocols: ['h2', 'http/1.1'],
    plain: true, // h2cの場合はtrue
  },
};

const expressApp = express();
async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  await app.init();

  const server = spdy.createServer(options, expressApp);
  server.listen(3000);
}
bootstrap();
