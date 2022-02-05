import {Injectable} from "@angular/core";
import {RemoveEmployeeService} from "./remove-employee.service";

@Injectable({
  providedIn: 'root',
  useClass: RemoveEmployeeService
})
export abstract class RemoveEmployee {
  abstract remove(id: string): void;
}
