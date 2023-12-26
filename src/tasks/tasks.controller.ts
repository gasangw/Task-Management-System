import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  getAllTasks(): Task[] {
    return this.taskService.getAll();
  }
}
