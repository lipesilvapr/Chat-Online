// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const userData = user._doc ? user._doc : user;
    const payload = { email: userData.email, sub: userData._id.toString() };
    const token = this.jwtService.sign(payload);
  
    return { access_token: token };
  }
  
  
  

  async register(user: any) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await this.userService.create({
      name: user.name,
      email: user.email,
      password: hashedPassword,
    });
    const { password, ...result } = newUser;
    return result;
  }
}