import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Form} from "../../lib/services/form/form";
import {ResetServices} from "../../lib/services/reset-services/reset-services";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private form: Form, private resetServices: ResetServices) {
  }

  ngOnInit(): void {
    this.resetServices.reset();
    this.setInitialData();
  }

  private setInitialData() {
    const employee = this.activatedRoute.snapshot.data['employee'];

    if (employee) {
      this.form.form.patchValue(employee);
    }
  }

}
