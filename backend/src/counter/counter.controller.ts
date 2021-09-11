import { Controller, Get, UseGuards } from '@nestjs/common';
import { FirebaseGuard } from 'src/auth/firebase.guard';
import { CounterService } from './counter.service';

@Controller('counter')
@UseGuards(FirebaseGuard)
export class CounterController {
  constructor(private counterService: CounterService) {}

  @Get('/')
  getCount() {
    return this.counterService.getCount();
  }

  @Get('/increment')
  incrementCounter() {
    return this.counterService.incrementCounter();
  }

  @Get('/reset')
  resetCounter() {
    return this.counterService.resetCounter();
  }
}
