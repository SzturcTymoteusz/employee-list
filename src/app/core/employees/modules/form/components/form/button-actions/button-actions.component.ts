import {Component, Input} from '@angular/core';
import {Form} from "../../../lib/services/form/form";
import {SaveForm} from "../../../lib/services/save-form/save-form";

@Component({
  selector: 'app-button-actions',
  templateUrl: './button-actions.component.html',
  styleUrls: ['./button-actions.component.scss']
})
export class ButtonActionsComponent {
  @Input() isEditing !: boolean;

  constructor(public form: Form, public saveForm: SaveForm) {
  }

}
