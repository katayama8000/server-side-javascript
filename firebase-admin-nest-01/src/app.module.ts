import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { Test1Service } from './TestNest/test1/test1.service';
import { Test1Controller } from './TestNest/test1/test1.controller';
import { Test2Service } from './TestNest/test1/test2/test2.service';
import { Test2Controller } from './TestNest/test1/test2/test2.controller';
import { CityController } from './city/city.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PlaceholderController } from './placeholder/placeholder.controller';
import { PlaceholderService } from './placeholder/placeholder.service';
import { PlaceholderModule } from './placeholder/placeholder.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    PlaceholderModule,
  ],
  controllers: [
    AppController,
    UserController,
    Test1Controller,
    Test2Controller,
    CityController,
    PlaceholderController,
  ],
  providers: [AppService, Test1Service, Test2Service, PlaceholderService],
})
export class AppModule {}