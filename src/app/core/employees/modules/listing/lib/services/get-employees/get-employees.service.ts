import {Injectable} from '@angular/core';
import {GetEmployees} from "./get-employees";
import {PrepareQueryOptions} from "../prepare-query-options/prepare-query-options";
import {SearchEmployees} from "../../../../../lib/services/search-employees/search-employees";
import {Row} from "../../models/row";

@Injectable()
export class GetEmployeesService implements GetEmployees {

  constructor(private prepareQueryOptions: PrepareQueryOptions, private searchEmployees: SearchEmployees) {
  }

  get(): Row {
    const queryOptions = this.prepareQueryOptions.prepare();
    return this.searchEmployees.search(queryOptions);
  }
}
