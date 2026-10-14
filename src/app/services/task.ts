import { Service } from '@angular/core';
import { Task } from '../models/task';

@Service()
export class TaskService {
  tasks: Task[] = [];
  private nextId = 1;

  addTask(title: string): void {
    this.tasks.push({
      id: this.nextId++,
      title: title.trim(),
      completed: false,
      createdAt: new Date()
    });
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  updateTask(id: number, title: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.title = title.trim();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}