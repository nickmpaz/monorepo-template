import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthUser } from './auth-user.decorator';
import { FirebaseGuard } from './firebase.guard';
import { User } from '../users/entities/user.entity';

@Controller('auth')
export class AuthController {
  @Get('/user')
  @UseGuards(FirebaseGuard)
  authenticated(@AuthUser() user: User): User {
    return user;
  }
}
