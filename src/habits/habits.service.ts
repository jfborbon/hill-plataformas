import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Habit } from './habit.interface';
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
}
