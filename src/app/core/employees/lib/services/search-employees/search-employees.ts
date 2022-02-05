import {Injectable} from "@angular/core";
import {SearchEmployeesService} from "./search-employees.service";
import {QueryOption} from "../../../modules/listing/lib/models/query-option";
import {Row} from "../../../modules/listing/lib/models/row";

@Injectable({
  providedIn: 'root',
  useClass: SearchEmployeesService
})
export abstract class SearchEmployees {
  abstract search(queryOptions: QueryOption): Row;
}
