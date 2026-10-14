import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-item',
  imports: [FormsModule, DatePipe],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter();
  @Output() toggleComplete = new EventEmitter();
  @Output() updateTask = new EventEmitter();

  isEditing = false;
  editTitle = '';

  onToggleComplete() {
    this.toggleComplete.emit(this.task.id);
  }

  onEdit() {
    this.editTitle = this.task.title;
    this.isEditing = true;
  }

  onSave() {
    const title = this.editTitle.trim();
    if (title === '') {
      return;
    }
    this.updateTask.emit({ id: this.task.id, title });
    this.isEditing = false;
  }

  onCancel() {
    this.isEditing = false;
  }

  onDelete() {
    this.delete.emit(this.task);
  }
}