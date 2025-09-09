import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Habit } from './habit.interface';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { TrackHabitDto } from './dto/track-habit.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class HabitsService {
  private habits: Habit[] = [];

  createHabit(userId: string, data: Partial<Habit>): Habit {
    if (!data.name || !data.category || !data.frequencyType) {
      throw new BadRequestException('Faltan campos obligatorios');
    }

    const newHabit: Habit = {
      id: uuidv4(),
      userId,
      name: data.name,
      category: data.category,
      frequencyType: data.frequencyType,
      frequencyValue: data.frequencyValue ?? 1,
      goal: data.goal ?? undefined,
      unit: data.unit ?? undefined,
      active: true,
      reminders: data.reminders ?? [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.habits.push(newHabit);
    return newHabit;
  }

  getAllHabits(userId: string): Habit[] {
    return this.habits.filter(h => h.userId === userId);
  }

  getHabitById(id: string): Habit {
    const habit = this.habits.find((h) => h.id === id);
    if (!habit) {
      throw new NotFoundException(`Hábito con id ${id} no encontrado`);
    }
    return habit;
  }

  updateHabit(id: string, updates: UpdateHabitDto): Habit {
    const habit = this.habits.find((h) => h.id === id);
    if (!habit) {
      throw new NotFoundException(`Hábito con id ${id} no encontrado`);
    }

    Object.assign(habit, updates, { updatedAt: new Date() });
    return habit;
  }

  deleteHabit(id: string): { message: string } {
    const index = this.habits.findIndex((h) => h.id === id);
    if (index === -1) {
      throw new NotFoundException(`Hábito con id ${id} no encontrado`);
    }

    this.habits.splice(index, 1); // eliminar del array
    return { message: `Hábito con id ${id} eliminado correctamente` };
  }

  trackHabit(id: string, trackData: TrackHabitDto): Habit {
    const habit = this.habits.find((h) => h.id === id);
    if (!habit) {
      throw new NotFoundException(`Hábito con id ${id} no encontrado`);
    }

    if (!habit.history) {
      habit.history = [];
    }

    habit.history.push({
      date: trackData.date,
      value: trackData.value,
    });

    habit.updatedAt = new Date();
    return habit;
  }

  getHabitHistory(id: string): { date: string; value?: number }[] {
    const habit = this.habits.find((h) => h.id === id);
    if (!habit) {
      throw new NotFoundException(`Hábito con id ${id} no encontrado`);
    }

    return habit.history ?? [];
  }
}
