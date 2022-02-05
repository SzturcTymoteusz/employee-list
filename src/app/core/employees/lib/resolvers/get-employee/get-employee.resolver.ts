import {Injectable} from "@angular/core";
import {GetEmployee} from "./get-employee";
import {Employee} from "../../models/employee";
import {ActivatedRouteSnapshot, Router} from "@angular/router";
import {map, Observable, of} from "rxjs";
import {GetEmployeeFromStore} from "../../services/get-employee-from-store/get-employee-from-store";

@Injectable()
export class GetEmployeeResolver implements GetEmployee {
  constructor(private router: Router, private getEmployeeFromStore: GetEmployeeFromStore) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Employee | null> {
    const id: string | undefined = route.params['id'];

    if (!id) {
      return of(null)
    }

    return of(this.getEmployeeFromStore.get(id)).pipe(map(employee => {
      if (employee === null) {
        this.router.navigateByUrl('employee/listing');
      }

      return employee;
    }));
  }
}
