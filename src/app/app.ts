import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent],
  template: '<app-task-list />'
})
export class App {}