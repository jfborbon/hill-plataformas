import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  login(@Body() body: { username: string; password: string }) {
    return this.authService.login(body.username, body.password);
  }

  @Post('register')
  @HttpCode(201)
  register(@Body() body: { username: string; password: string }) {
    return this.authService.register(body.username, body.password);
  }

  @Post('logout')
  @HttpCode(200)
  logout(@Body() body: { username: string }) {
    return this.authService.logout(body.username);
  }

  @Get('users')
  getUsers() {
    return this.authService.getUsers();
  }
}
