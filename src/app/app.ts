import { Component } from '@angular/core';
import { TaskInputComponent } from './components/task-input/task-input';
import { TaskItemComponent } from './components/task-item/task-item';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskInputComponent, TaskItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks: Task[] = [];
  nextId: number = 1;

  addNewTask(title: string) {
    const newTask: Task = {
      id: this.nextId,
      title: title,
      completed: false,
      isEditing: false
    };
    this.tasks.push(newTask);
    this.nextId = this.nextId ++;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(function(t) {
      return t.id !== id;
    });
  }

  toggleTaskComplete(id: number) {
    const task = this.tasks.find(function(t) {
      return t.id === id;
    });
    if (task) {
      if (task.completed) {
        task.completed = false;
      } else {
        task.completed = true;
      }
    }
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(function(t) {
      return t.id === updatedTask.id;
    });
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }
}