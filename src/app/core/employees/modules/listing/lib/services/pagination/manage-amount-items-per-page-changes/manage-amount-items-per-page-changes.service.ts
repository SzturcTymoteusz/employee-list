import {Injectable} from "@angular/core";
import {ManageAmountItemsPerPageChanges} from "./manage-amount-items-per-page-changes";
import {PaginationForm} from "../pagination-form/pagination-form";
import {PaginationSettings} from "../pagination-settings/pagination-settings";
import {InvokeGetEmployees} from "../../invoke-get-employees/invoke-get-employees";

@Injectable()
export class ManageAmountItemsPerPageChangesService implements ManageAmountItemsPerPageChanges{
  constructor(
    private paginationForm: PaginationForm,
    private paginationSettings: PaginationSettings,
    private invokeGetEmployees: InvokeGetEmployees,
    ) {
  }

  manage() {
    this.paginationForm.itemsPerPage.valueChanges.subscribe((amountItemsOnPage: number) => {
      this.paginationSettings.amountItemsOnPage = amountItemsOnPage;
      this.paginationSettings.settings.page = this.preparePageNumber(amountItemsOnPage);
      this.invokeGetEmployees.invoke();
    })
  }

  private preparePageNumber(itemsPerPage: number): number {
    let newPageNumber = 1;
    let startItemIndex = (newPageNumber - 1) * itemsPerPage;
    let endItemIndex = newPageNumber * itemsPerPage;
    while (!this.isStartItemIndexInRange([startItemIndex, endItemIndex])) {
      newPageNumber++;
      startItemIndex = (newPageNumber - 1) * itemsPerPage;
      endItemIndex = newPageNumber * itemsPerPage;
    }

    return newPageNumber
  }

  private isStartItemIndexInRange(range: [number, number]): boolean {
    return range[0] <= this.paginationSettings.settings.startItemIndex && range[1] > this.paginationSettings.settings.startItemIndex;
  }
}
