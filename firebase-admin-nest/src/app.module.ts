import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { Test1Service } from './test1/test1.service';
import { Test1Controller } from './test1/test1.controller';
import { Test2Service } from './test2/test2.service';
import { Test2Controller } from './test2/test2.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [
    AppController,
    UserController,
    Test1Controller,
    Test2Controller,
  ],
  providers: [AppService, Test1Service, Test2Service],
})
export class AppModule {}
