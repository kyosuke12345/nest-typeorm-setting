import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './db/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService, @InjectRepository(User) private userRepository: Repository<User>) {}
  getHello(): string {
    console.log(this.configService.get('DATABASE_HOST'), this.configService.get('DATABASE_DB'));
    return 'Hello World!';
  }

  async userList(): Promise<User[]> {
    return this.userRepository.find();
  }
}
