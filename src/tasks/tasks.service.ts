import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private Tasks: Task[] = [];

  getAll(): Task[] {
    return this.Tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.Tasks.push(task);
    return task;
  }

  getOneTask(id: string): Task {
    return this.Tasks.find((task) => task.id === id);
  }

  deleteTask(id: string) {
    this.Tasks.filter((task) => task.id !== id);
  }

  updateTask(id: string, updateTaskDto: UpdateTaskDto) {
    const task = this.getOneTask(id);
    task.status = updateTaskDto.status;
    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    return task;
  }
}
