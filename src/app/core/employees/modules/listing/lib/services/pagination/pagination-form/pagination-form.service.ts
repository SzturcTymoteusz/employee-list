import {Injectable} from '@angular/core';
import {PaginationForm} from "./pagination-form";
import {FormControl, FormGroup} from "@angular/forms";
import {PaginationSettings} from "../pagination-settings/pagination-settings";

@Injectable()
export class PaginationFormService implements PaginationForm {
  private form = new FormGroup({
    itemsPerPage: new FormControl(this.paginationSettings.settings.amountItemsOnPage)
  })

  constructor(private paginationSettings: PaginationSettings) {
  }

  get itemsPerPage(): FormControl {
    return this.form.get('itemsPerPage') as FormControl;
  }

  reset() {
    this.form.reset({
      itemsPerPage: this.paginationSettings.settings.amountItemsOnPage
    })
  }
}
