import {Component, Input} from '@angular/core';
import {Employee} from "../../../../lib/models/employee";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() employee!: Employee;
}
