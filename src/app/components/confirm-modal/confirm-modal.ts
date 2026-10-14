import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.html',
  styleUrl: './confirm-modal.css'
})
export class ConfirmModalComponent {
  @Input() message = '';
  @Output() confirmed = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}