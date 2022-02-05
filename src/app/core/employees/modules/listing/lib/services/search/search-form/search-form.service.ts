import {Injectable} from "@angular/core";
import {SearchForm} from "./search-form";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable()
export class SearchFormService implements SearchForm {
  private _form = new FormGroup({
    name: new FormControl(null),
    company: new FormControl(null),
  })

  get form(): FormGroup {
    return this._form
  }

  get name(): FormControl {
    return this._form.get('name') as FormControl;
  }

  get company(): FormControl {
    return this._form.get('company') as FormControl;
  }

  reset() {
    this._form.reset();
  }

}
