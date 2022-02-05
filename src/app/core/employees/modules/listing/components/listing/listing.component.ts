import {Component, OnDestroy, OnInit} from '@angular/core';
import {IsOpenSearch} from "../../lib/services/search/is-open-search/is-open-search";
import {ResetServices} from "../../lib/services/reset-services/reset-services";
import {Subject, takeUntil} from "rxjs";
import {GetEmployees} from "../../lib/services/get-employees/get-employees";
import {InvokeGetEmployees} from "../../lib/services/invoke-get-employees/invoke-get-employees";
import {Employee} from "../../../../lib/models/employee";
import {SetPaginationSettings} from "../../lib/services/pagination/set-pagination-settings/set-pagination-settings";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, OnDestroy {
  employees!: Employee[];
  private destroy = new Subject();


  constructor(
    private getEmployees: GetEmployees,
    public isOpenSearch: IsOpenSearch,
    private resetServices: ResetServices,
    private invokeGetEmployees: InvokeGetEmployees,
    private setPaginationSettings: SetPaginationSettings
  ) {
  }

  ngOnInit(): void {
    this.resetServices.reset();
    this.getData();
    this.invokeGetEmployees.invokeObservable.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.getData();
    })
  }


  ngOnDestroy() {
    this.destroy.next(undefined);
    this.destroy.complete();
  }

  private getData() {
    const data = this.getEmployees.get();
    this.employees = data.items;
    this.setPaginationSettings.set(data)
  }
}
