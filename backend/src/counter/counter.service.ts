import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Counter } from './entities/counter.entity';

@Injectable()
export class CounterService {
  constructor(
    @InjectRepository(Counter)
    private counterRepository: Repository<Counter>,
  ) {}

  async getCounter(): Promise<Counter> {
    const counters = await this.counterRepository.find();
    let counter: Counter;
    if (!counters.length) {
      counter = new Counter();
      this.counterRepository.save(counter);
    } else {
      counter = counters[0];
    }
    return counter;
  }

  async getCount() {
    const counter = await this.getCounter();
    return counter.count;
  }

  async incrementCounter() {
    const counter = await this.getCounter();
    counter.count++;
    this.counterRepository.save(counter);
    return counter.count;
  }

  async resetCounter() {
    const counter = await this.getCounter();
    counter.count = 0;
    this.counterRepository.save(counter);
    return counter.count;
  }
}
