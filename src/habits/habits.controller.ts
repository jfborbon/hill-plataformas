import { Controller, Post, Get, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

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
}
