import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Employee} from "../../../../lib/models/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee!: Employee;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.employee = this.activatedRoute.snapshot.data['employee'];
  }

}
