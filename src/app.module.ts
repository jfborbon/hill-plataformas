import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { HabitsModule } from './habits/habits.module';
import { NotificationsModule } from './notifications/notifications.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { AchievementsModule } from './achievements/achievements.module';
import { AdminModule } from './admin/admin.module';
import { SupportModule } from './support/support.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [AuthModule, HabitsModule, NotificationsModule, RecommendationsModule, AchievementsModule, AdminModule, SupportModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
