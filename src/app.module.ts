import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Password,
  PasswordSchema,
} from './repositories/entities/password.entity';
import { ApiController } from './api.controller';

const mongoDb = [
  MongooseModule.forRoot(
    // 'mongodb://user123:pass123@localhost:27017/?authSource=admin', // Local run
    'mongodb://user123:pass123@generate-password-database-mongodb:27017/?authSource=admin', // Dcoker run
    {
      dbName: 'generatePassword',
    },
  ),
  MongooseModule.forFeature([
    {
      name: Password.name,
      schema: PasswordSchema,
    },
  ]),
];

@Module({
  imports: [...mongoDb],
  controllers: [AppController, ApiController],
  providers: [AppService],
})
export class AppModule {}
