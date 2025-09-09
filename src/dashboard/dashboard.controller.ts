import { Controller, Get, Param, Query } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) {}

    @Get('summary')
    getSummary(@Query('userId') userId: string) {
        return this.dashboardService.getSummary(userId);
    }

    @Get('habits/:id')
    getHabitDetail(@Param('id') id: string) {
        return this.dashboardService.getHabitById(id);
    }
}