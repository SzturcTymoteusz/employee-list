import {Injectable} from "@angular/core";
import {GetEmployeeFromStoreService} from "./get-employee-from-store.service";
import {Employee} from "../../models/employee";

@Injectable({
  providedIn: 'root',
  useClass: GetEmployeeFromStoreService
})
export abstract class GetEmployeeFromStore {
  abstract get(id: string): Employee | null;
}
