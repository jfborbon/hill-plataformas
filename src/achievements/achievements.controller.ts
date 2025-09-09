import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { ShareAchievementDto } from './dto/share-achievement.dto';

@Controller('achievements')
export class AchievementsController {
    constructor(private readonly achievementsService: AchievementsService) {}

    @Get()
    getAchievements(@Query('userId') userId: string) {
        return this.achievementsService.getAchievements(userId);
    }

    @Post('share')
    shareAchievement(@Body() body: ShareAchievementDto) {
        return this.achievementsService.shareAchievement(body);
    }
}