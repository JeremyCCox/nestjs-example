import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ accessToken: string }> {
    const user: { username: string; password: string } =
      await this.usersService.findUser(username);
    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: username };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
