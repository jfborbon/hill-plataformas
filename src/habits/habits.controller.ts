import { Controller, Post, Get, Body, Query, Param } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';

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
}
