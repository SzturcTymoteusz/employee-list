import {Injectable} from "@angular/core";
import {RemoveEmployee} from "./remove-employee";
import {DataStore} from "../../../../../lib/services/data-store/data-store";
import {InvokeGetEmployees} from "../invoke-get-employees/invoke-get-employees";

@Injectable()
export class RemoveEmployeeService implements RemoveEmployee {
  constructor(private DataStore: DataStore, private invokeGetEmployees: InvokeGetEmployees) {
  }

  remove(id: string) {
    this.DataStore.removeById(id);
    this.invokeGetEmployees.invoke();
  }
}
