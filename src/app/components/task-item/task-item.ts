import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter();
  @Output() toggleComplete = new EventEmitter();
  @Output() updateTask = new EventEmitter();

  onToggleComplete() {
    this.toggleComplete.emit(this.task.id);
  }

  onToggleEdit() {
    if (this.task.isEditing) {
      this.updateTask.emit(this.task);
      this.task.isEditing = false;
    } else {
      this.task.isEditing = true;
    }
  }

onDelete() {
  this.delete.emit(this.task.id);
}
}