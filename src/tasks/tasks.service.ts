import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuidv4 from 'uuid';

@Injectable()
export class TasksService {
  private Tasks: Task[] = [];

  getAll(): Task[] {
    return this.Tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.Tasks.push(task);
    return task;
  }
}
