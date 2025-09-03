import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly users = [
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
}
