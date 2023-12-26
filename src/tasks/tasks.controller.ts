import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAll();
  }

  @Post()
  createTask(@Body() body: any) {
    return this.taskService.createTask(body.title, body.description);
  }
}
