import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TasksService {
  constructor(private readonly configService: ConfigService) {}
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return `This action returns all tasks`;
  }

  async findOne(id: string) {
    const url = this.configService.get('USER_URL');
    // const config = {
    //   method: 'get',
    // };
    let r = await fetch(url);
    r = await r.json();
    // return `This action returns a #${id} task`;
    return r;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
