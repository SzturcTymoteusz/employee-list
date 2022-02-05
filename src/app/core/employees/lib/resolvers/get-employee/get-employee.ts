import {Injectable} from "@angular/core";
import {GetEmployeeResolver} from "./get-employee.resolver";
import {ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Employee} from "../../models/employee";

@Injectable({
  providedIn: 'root',
  useClass: GetEmployeeResolver
})
export abstract class GetEmployee {
  abstract resolve(route: ActivatedRouteSnapshot): Observable<Employee | null>
}
