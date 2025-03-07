import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.userService.findOneByEmail(req.user.email);
    if (!user) {
      console.error('Usuário não encontrado para o email:', req.user.email); // Log do email
      throw new Error('Usuário não encontrado');
    }
    const { password, ...result } = user; // Remove a senha do objeto
    return result;
  }
}
