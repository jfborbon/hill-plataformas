import { Controller, Put, Body, Get, Query } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { UpdatePreferencesDto } from './dto/update-preferences.dto';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) {}

    @Put('preferences')
    updatePreferences(@Body() body: UpdatePreferencesDto) {
        return this.notificationsService.updatePreferences(body);
    }

    @Get('preferences')
    getPreferences(@Query('userId') userId: string) {
        return this.notificationsService.getPreferences(userId);
    }
}