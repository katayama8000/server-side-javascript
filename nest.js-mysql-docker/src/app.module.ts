import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { UserModule } from './user/user.module';
import { PaymentsModule } from './payments/payments.module';

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
    PaymentsModule,
  ],
})
export class AppModule {}
