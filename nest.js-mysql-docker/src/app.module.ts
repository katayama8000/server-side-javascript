import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db-server',
      port: 3306,
      username: 'develop',
      password: 'password',
      database: 'develop',
      entities: entities,
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
