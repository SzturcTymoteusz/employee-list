import {Component} from '@angular/core';
import {Form} from "../../lib/services/form/form";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(public form: Form) {
  }
}
