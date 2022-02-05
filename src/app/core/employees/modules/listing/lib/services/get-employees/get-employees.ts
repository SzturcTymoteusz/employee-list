import {Injectable} from "@angular/core";
import {GetEmployeesService} from "./get-employees.service";
import {Row} from "../../models/row";

@Injectable({
  providedIn: 'root',
  useClass: GetEmployeesService
})
export abstract class GetEmployees {
  abstract get(): Row;
}
