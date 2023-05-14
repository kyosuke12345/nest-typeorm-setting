import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './db/database.config';
import { User } from './db/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}), 
    TypeOrmModule.forRootAsync({ 
      imports: [ConfigModule], 
      useClass: TypeOrmConfigService,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
