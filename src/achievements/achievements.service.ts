import { Injectable } from '@nestjs/common';
import { Achievement } from './achievement.interface';
import { ShareAchievementDto } from './dto/share-achievement.dto';

@Injectable()
export class AchievementsService {
    private achievements: Achievement[] = [
        {
            id: 'a1',
            title: 'Primer hábito creado',
            description: 'Has creado tu primer hábito, ¡felicidades!',
            dateUnlocked: new Date('2025-09-01'),
        },
        {
            id: 'a2',
            title: 'Semana de constancia',
            description: 'Cumpliste un hábito durante 7 días seguidos.',
            dateUnlocked: new Date('2025-09-05'),
        },
    ];

    getAchievements(userId: string): Achievement[] {
        return this.achievements;
    }

    shareAchievement(data: ShareAchievementDto) {
        return {
        status: 'success',
        message: `El logro ${data.achievementId} fue compartido por el usuario ${data.userId}`,
        sharedMessage: data.description ?? null,
        };
    }
}