import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () => import('./core/employees/employees.module').then((m) => m.EmployeesModule),
  },
  {
    path: '**',
    redirectTo: 'employee'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
