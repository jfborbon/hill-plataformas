import { Injectable, NotFoundException } from '@nestjs/common';
import { NotificationPreferences } from './notification.interface';
import { UpdatePreferencesDto } from './dto/update-preferences.dto';

@Injectable()
export class NotificationsService {
  private preferences: NotificationPreferences[] = [];

  updatePreferences(data: UpdatePreferencesDto): NotificationPreferences {
    let userPreferences = this.preferences.find((p) => p.userId === data.userId);

    if (!userPreferences) {
        userPreferences = {
        userId: data.userId,
        email: data.email ?? true,
        push: data.push ?? true,
        sms: data.sms ?? false,
        reminderTimes: data.reminderTimes ?? [],
      };
        this.preferences.push(userPreferences);
    } 
    else {
        Object.assign(userPreferences, data);
    }

    return userPreferences;
    }

    getPreferences(userId: string): NotificationPreferences {
        const prefs = this.preferences.find((p) => p.userId === userId);
        if (!prefs) {
            throw new NotFoundException(`No hay preferencias guardadas para el usuario ${userId}`);
        }
        return prefs;
    }
}
