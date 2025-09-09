import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DashboardService {
    private habits = [
        { id: 'h1', userId: 'u123', name: 'Tomar agua', active: true, progress: 60 },
        { id: 'h2', userId: 'u123', name: 'Caminar', active: false, progress: 20 },
    ];


    // falta cuadrar aqui lo de la base de datos para que tenga valores de verdad
    getSummary(userId: string) {
        return {
            userId,
            totalHabits: 5,
            completedToday: 3,
            activeHabits: 4,
            achievementsUnlocked: 2,
        };
    }

    getHabitById(id: string) {
        const habit = this.habits.find(h => h.id === id);
        if (!habit) {
            throw new NotFoundException(`No se encontró el hábito con id ${id}`);
        }
        return habit;
    }
}