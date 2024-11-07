import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from "@nestjs/common";
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    console.log(signInDto);
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
  @Get('loginQuery')
  signInQuery(
    @Query('username') username: string,
    @Query('password') password: string,
  ) {
    console.log(username, password);
    return this.authService.signIn(username, password);
  }
  @Get('loginParam/:username')
  signInParam(
    @Param('username') username: string,
    @Query('password') password: string,
  ) {
    console.log(username, password);
    return this.authService.signIn(username, password);
  }
}
