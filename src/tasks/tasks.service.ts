import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private Tasks = [];

  getAll() {
    return this.Tasks;
  }
}
