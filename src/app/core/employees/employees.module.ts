import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeesComponent} from './components/employees/employees.component';
import {RouterModule} from "@angular/router";
import {EmployeesRoutingModule} from "./employees-routing.module";


@NgModule({
  declarations: [
    EmployeesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule {
}
