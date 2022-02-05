import {Injectable} from "@angular/core";
import {DataStoreService} from "./data-store.service";
import {Employee} from "../../models/employee";

@Injectable({
  providedIn: 'root',
  useClass: DataStoreService
})
export abstract class DataStore {
  abstract get data(): Employee[];

  abstract removeById(id: string): void;

  abstract getEmployee(id: string): Employee | null;

  abstract editEmployee(id: string, employee: Employee): void;

  abstract addEmployee(employee: Employee): void;

  abstract checkIdIsUnique(id: string): boolean;

  abstract checkEmailIsUnique(email: string, id?: string): boolean;
}
