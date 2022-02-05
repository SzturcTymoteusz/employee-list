import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GetEmployee} from "./lib/resolvers/get-employee/get-employee";

const routes: Routes = [
  {
    path: 'listing',
    loadChildren: () => import('./modules/listing/listing.module').then((m) => m.ListingModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./modules/form/form.module').then((m) => m.FormModule),
  },
  {
    path: ':id',
    resolve: {
      employee: GetEmployee
    },
    loadChildren: () => import('./modules/employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: '**',
    redirectTo: 'listing'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {
}
