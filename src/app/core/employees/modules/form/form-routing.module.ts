import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {GetEmployee} from "../../lib/resolvers/get-employee/get-employee";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: ':id',
    resolve: {
      employee: GetEmployee
    },
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {
}
