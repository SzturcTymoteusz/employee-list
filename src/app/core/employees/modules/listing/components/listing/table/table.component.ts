import {Component, Input} from '@angular/core';
import {Employee} from "../../../../../lib/models/employee";
import {IsOpenSearch} from "../../../lib/services/search/is-open-search/is-open-search";
import {SortSettings} from "../../../lib/services/sort/sort-settings/sort-settings";
import {SetActiveSortSettings} from "../../../lib/services/sort/set-active-sort-settings/set-active-sort-settings";
import {RemoveEmployee} from "../../../lib/services/remove-employee/remove-employee";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() employees: Employee[] = [];
  isOpen = new BehaviorSubject<boolean>(false);

  private removedEmployeeId: string | null = null;

  constructor(
    public isOpenSearch: IsOpenSearch,
    public sortSettings: SortSettings,
    public setActiveSortSettings: SetActiveSortSettings,
    public removeEmployee: RemoveEmployee,
  ) {
  }

  openRemoveConfirmationDialog(id: string) {
    this.removedEmployeeId = id;
    this.isOpen.next(true);
  }

  onClose(isConfirmed: boolean) {
    if (isConfirmed) {
      this.removeEmployee.remove(this.removedEmployeeId as string);
    }
    this.isOpen.next(false);
    this.removedEmployeeId = null;
  }
}
