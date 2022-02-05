import {Injectable} from "@angular/core";
import {PageChange} from "./page-change";
import {PaginationSettings} from "../pagination-settings/pagination-settings";
import {InvokeGetEmployees} from "../../invoke-get-employees/invoke-get-employees";

@Injectable()
export class PageChangeService implements PageChange {
  constructor(public paginationSettings: PaginationSettings, private invokeGetEmployees: InvokeGetEmployees) {
  }

  goFirstPage() {
    if (this.paginationSettings.settings.hasPrevPage) {
      this.paginationSettings.settings.page = 1;
      this.invokeGetEmployees.invoke();
    }
  }

  goPrevPage() {
    if (this.paginationSettings.settings.hasPrevPage) {
      this.paginationSettings.settings.page = this.paginationSettings.settings.page - 1;
      this.invokeGetEmployees.invoke();
    }
  }

  goNextPage() {
    if (this.paginationSettings.settings.hasNextPage) {
      this.paginationSettings.settings.page = this.paginationSettings.settings.page + 1;
      this.invokeGetEmployees.invoke();
    }
  }

  goLastPage() {
    if (this.paginationSettings.settings.hasNextPage) {
      this.paginationSettings.settings.page = this.paginationSettings.settings.totalPages;
      this.invokeGetEmployees.invoke();
    }
  }
}
