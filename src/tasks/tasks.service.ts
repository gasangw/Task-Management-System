import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private Tasks: Task[] = [];

  getAll(): Task[] {
    return this.Tasks;
  }
}
