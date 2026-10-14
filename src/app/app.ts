import { Component, inject } from '@angular/core';
import { TaskInputComponent } from './components/task-input/task-input';
import { TaskItemComponent } from './components/task-item/task-item';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal';
import { TaskService } from './services/task';
import { Task } from './models/task';

type Filter = 'all' | 'active' | 'completed';

@Component({
  selector: 'app-root',
  imports: [TaskInputComponent, TaskItemComponent, ConfirmModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private taskService = inject(TaskService);

  filter: Filter = 'all';
  taskToDelete: Task | null = null;

  get tasks(): Task[] {
    return this.taskService.tasks;
  }

  get filteredTasks(): Task[] {
    if (this.filter === 'active') {
      return this.tasks.filter(t => !t.completed);
    }
    if (this.filter === 'completed') {
      return this.tasks.filter(t => t.completed);
    }
    return this.tasks;
  }

  setFilter(filter: Filter): void {
    this.filter = filter;
  }

  addNewTask(title: string): void {
    this.taskService.addTask(title);
  }

  toggleTaskComplete(id: number): void {
    this.taskService.toggleTask(id);
  }

  updateTask(data: { id: number; title: string }): void {
    this.taskService.updateTask(data.id, data.title);
  }

  askDelete(task: Task): void {
    this.taskToDelete = task;
  }

  confirmDelete(): void {
    if (this.taskToDelete) {
      this.taskService.deleteTask(this.taskToDelete.id);
      this.taskToDelete = null;
    }
  }

  cancelDelete(): void {
    this.taskToDelete = null;
  }
}