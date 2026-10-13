import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

deleteTask(id: number): void {
  this.tasks = this.tasks.filter(t => t.id !== id);
}

  toggleTask(id: number): void {
    this.tasks.forEach(t => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
    });
  }

  updateTask(task: Task): void {
    this.tasks.forEach(t => {
      if (t.id === task.id) {
        t.title = task.title;
      }
    });
  }
}