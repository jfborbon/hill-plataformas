import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  private users = [
    { username: 'admin', password: '1234' },
    { username: 'juan', password: 'abcd' },
  ];

  private habits = [
    { id: 'h1', userId: 'juan', name: 'Tomar agua', active: true },
    { id: 'h2', userId: 'juan', name: 'Caminar', active: false },
  ];

  getAllUsers() {
    return this.users.map(u => ({ username: u.username }));
  }

  getReports() {
    const totalUsers = this.users.length;
    const totalHabits = this.habits.length;
    const activeHabits = this.habits.filter(h => h.active).length;
    const inactiveHabits = totalHabits - activeHabits;

    return {
      totalUsers,
      totalHabits,
      activeHabits,
      inactiveHabits,
    };
  }
}