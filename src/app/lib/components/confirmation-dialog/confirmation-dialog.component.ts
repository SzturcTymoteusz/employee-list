import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  @Input() open!: Observable<boolean>;
  @Output() close = new EventEmitter<boolean>();
  @Input() title!: string;
  @Input() content!: string;
  @Input() confirmationActionLabel: string = 'Yes';
  @Input() cancelActionLabel: string = 'Cancel';

  onClose(event: Event, isConfirmed: boolean) {
    event.stopPropagation();
    this.close.emit(isConfirmed);
  }

  clickOnOverlay() {
    this.close.emit(false);
  }

  clickOnDialog(event: Event) {
    event.stopPropagation();
  }
}
