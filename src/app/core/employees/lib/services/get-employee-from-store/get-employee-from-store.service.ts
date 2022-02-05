import {Injectable} from "@angular/core";
import {GetEmployeeFromStore} from "./get-employee-from-store";
import {Employee} from "../../models/employee";
import {DataStore} from "../data-store/data-store";

@Injectable()
export class GetEmployeeFromStoreService implements GetEmployeeFromStore {
  constructor(private dataStore: DataStore) {
  }

  get(id: string): Employee | null {
    return this.dataStore.getEmployee(id);
  }
}
