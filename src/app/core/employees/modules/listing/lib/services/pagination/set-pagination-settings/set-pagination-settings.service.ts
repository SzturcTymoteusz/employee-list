import {Injectable} from "@angular/core";
import {SetPaginationSettings} from "./set-pagination-settings";
import {Row} from "../../../models/row";
import {PaginationSettings} from "../pagination-settings/pagination-settings";
import {PaginationForm} from "../pagination-form/pagination-form";

@Injectable()
export class SetPaginationSettingsService implements SetPaginationSettings {
  private totalItems!: number;
  private page!: number;
  private amountItemsOnPage!: number;

  constructor(private paginationSettings: PaginationSettings, private paginationForm: PaginationForm) {
  }

  set(data: Row) {
    this.totalItems = data.totalItems;
    this.page = data.page;
    this.amountItemsOnPage = this.paginationForm.itemsPerPage.value;

    this.paginationSettings.settings = {
      amountItemsOnPage: this.paginationForm.itemsPerPage.value,
      page: data.page,
      hasNextPage: data.hasNextPage,
      hasPrevPage: data.hasPrevPage,
      nextPage: data.nextPage,
      prevPage: data.prevPage,
      totalItems: data.totalItems,
      totalPages: data.totalPages,
      startItemIndex: this.prepareStartItemIndex(),
      endItemIndex: this.prepareEndItemIndex(),
    }
  }

  private prepareStartItemIndex(): number {
    let startItemIndex = 0;

    if (this.totalItems === 0) {
      return startItemIndex;
    }

    startItemIndex = (this.page - 1) * this.amountItemsOnPage + 1;
    return startItemIndex;
  }

  private prepareEndItemIndex(): number | null {
    let endItemIndex: number | null = null;

    if (this.totalItems === 0) {
      return endItemIndex;
    }

    endItemIndex = this.page * this.amountItemsOnPage;
    endItemIndex = endItemIndex > this.totalItems ? this.totalItems : endItemIndex;
    return endItemIndex;
  }
}
