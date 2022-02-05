import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeComponent} from './components/employee/employee.component';
import {HeaderComponent} from "./components/header/header.component";
import {ContentComponent} from "./components/content/content.component";
import {SharedModule} from "../../../../lib/modules/shared.module";


@NgModule({
  declarations: [
    EmployeeComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule {
}
