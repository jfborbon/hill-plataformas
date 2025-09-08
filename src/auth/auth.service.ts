import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Habit } from 'src/habits/habit.interface';
import { v4 as uuidv4 } from 'uuid';

interface User {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  private readonly users: User[] = [
    { username: 'admin', password: '1234' },
    { username: 'juan', password: 'abcd' },
  ];

  login(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );

    if (!user) {
      throw new UnauthorizedException('Usuario o contraseña incorrectos');
    }

    return {
      message: 'Login exitoso',
      user: { username: user.username },
    };
  }

  register(username: string, password: string) {
    if (!username || !password) {
      throw new BadRequestException('El username y password son obligatorios');
    }

    const existingUser = this.users.find((u) => u.username === username);
    if (existingUser) {
      throw new BadRequestException('El usuario ya existe');
    }

    const newUser: User = { username, password };
    this.users.push(newUser);

    return {
      message: 'Usuario registrado exitosamente',
      user: { username: newUser.username },
    };
  }

  logout(username: string) {
    return { message: `El usuario ${username} cerró sesión correctamente` };
  }

  getUsers() {
    return this.users.map((u) => ({ username: u.username }));
  }

  

}
