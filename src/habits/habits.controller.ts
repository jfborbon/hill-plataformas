import { Controller, Post, Get, Body, Query, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { TrackHabitDto } from './dto/track-habit.dto';
import { AddReminderDto } from './dto/add-reminder.dto';

@Controller('habits')
export class HabitsController {
    constructor(private readonly habitsService: HabitsService) {}

    @Post()
    createHabit(@Body() body: CreateHabitDto) {
        return this.habitsService.createHabit(body.userId, body);
    }

    @Get()
    getHabits(@Query('userId') userId: string) {
        return this.habitsService.getAllHabits(userId);
    }

    @Get(':id')
    getHabitById(@Param('id') id: string) {
        return this.habitsService.getHabitById(id);
    }

    @Put(':id')
    updateHabit(@Param('id') id: string, @Body() updates: UpdateHabitDto) {
        return this.habitsService.updateHabit(id, updates);
    }

    @Delete(':id')
    deleteHabit(@Param('id') id: string) {
        return this.habitsService.deleteHabit(id);
    }

    @Post(':id/track')
    trackHabit(@Param('id') id: string, @Body() body: TrackHabitDto) {
        return this.habitsService.trackHabit(id, body);
    }

    @Get(':id/history')
    getHabitHistory(@Param('id') id: string) {
        return this.habitsService.getHabitHistory(id);
    }

    // recordatorios
    @Post(':id/reminders')
    addReminder(@Param('id') id: string, @Body() body: AddReminderDto) {
        return this.habitsService.addReminder(id, body);
    }

    @Get(':id/reminders')
    getReminders(@Param('id') id: string) {
        return this.habitsService.getReminders(id);
    }

    @Delete(':id/reminders/:index')
    deleteReminder(@Param('id') habitId: string, @Param('index', ParseIntPipe) index: number) {
        return this.habitsService.deleteReminder(habitId, index);
    }
}
