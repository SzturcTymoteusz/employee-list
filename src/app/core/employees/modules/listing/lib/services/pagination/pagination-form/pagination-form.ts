import {Injectable} from "@angular/core";
import {PaginationFormService} from "./pagination-form.service";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root',
  useClass: PaginationFormService
})
export abstract class PaginationForm {
  abstract get itemsPerPage(): FormControl;

  abstract reset(): void;
}
