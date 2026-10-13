import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.html',
  styleUrl: './task-input.css'
})
export class TaskInputComponent {
  taskTitle: string = '';
  @Output() taskAdded = new EventEmitter();

  onAddTask() {
    if (this.taskTitle.trim() !== '') {
      this.taskAdded.emit(this.taskTitle);
      this.taskTitle = '';
    }
  }
}