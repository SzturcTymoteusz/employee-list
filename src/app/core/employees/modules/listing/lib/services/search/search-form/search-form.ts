import {Injectable} from "@angular/core";
import {SearchFormService} from "./search-form.service";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root',
  useClass: SearchFormService
})
export abstract class SearchForm {
  abstract get form(): FormGroup;

  abstract get name(): FormControl;

  abstract get company(): FormControl;

  abstract reset(): void;
}
