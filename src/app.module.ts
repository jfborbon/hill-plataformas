import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { HabitsModule } from './habits/habits.module';

@Module({
  imports: [AuthModule, HabitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
