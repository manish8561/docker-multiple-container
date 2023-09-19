import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [TasksController],
  providers: [TasksService, ConfigService],
})
export class TasksModule {}
