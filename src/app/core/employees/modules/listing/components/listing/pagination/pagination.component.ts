import {Component, OnInit} from '@angular/core';
import {PaginationSettings} from "../../../lib/services/pagination/pagination-settings/pagination-settings";
import {PaginationForm} from "../../../lib/services/pagination/pagination-form/pagination-form";
import {
  ManageAmountItemsPerPageChanges
} from "../../../lib/services/pagination/manage-amount-items-per-page-changes/manage-amount-items-per-page-changes";
import {PageChange} from "../../../lib/services/pagination/page-change/page-change";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(
    public paginationSettings: PaginationSettings,
    public paginationForm: PaginationForm,
    private manageAmountItemsPerPageChanges: ManageAmountItemsPerPageChanges,
    public pageChange: PageChange
  ) {
  }

  ngOnInit(): void {
    this.manageAmountItemsPerPageChanges.manage()
  }
}
