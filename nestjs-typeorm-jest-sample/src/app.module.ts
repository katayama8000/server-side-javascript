import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // MEMO config.tsとか切り出したい、、、
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      logging: true,
      // see https://stackoverflow.com/questions/59435293/typeorm-entity-in-testjs-cannot-use-import-statement-outside-a-module
      // see https://stackoverflow.com/questions/63109954/running-e2e-tests-with-jest-testjs  entities: [__dirname + '/**/*.entity.{ts,js}'],
      entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
      migrations: ['src/migration/**/*.ts'],
      subscribers: ['src/subscriber/**/*.ts'],
      timezone: '+09:00',
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
