import {Injectable} from "@angular/core";
import {SetActiveSortSettings} from "./set-active-sort-settings";
import {SortSettings} from "../sort-settings/sort-settings";
import {SortDirection} from "../../../types/sort-direction";
import {InvokeGetEmployees} from "../../invoke-get-employees/invoke-get-employees";

@Injectable()
export class SetActiveSortSettingsService implements SetActiveSortSettings {
  constructor(private sortSettings: SortSettings, private invokeGetEmployees: InvokeGetEmployees) {
  }

  set(columnIndex: string) {
    const sortColumnIndex = columnIndex;
    const sortDirection = SortDirection.asc;

    if (this.changedColumnIndex(sortColumnIndex)) {
      this.sortSettings.settings = {
        sortColumnIndex,
        sortDirection
      }
    } else {
      this.sortSettings.settings = {
        sortColumnIndex: columnIndex,
        sortDirection: this.prepareNewSortDirection()
      }
    }

    this.invokeGetEmployees.invoke();
  }

  private changedColumnIndex(newColumnIndex: string): boolean {
    return newColumnIndex !== this.sortSettings.settings.sortColumnIndex
  }

  private prepareNewSortDirection(): SortDirection {
    if (this.sortSettings.settings.sortDirection === 'asc') {
      return SortDirection.desc
    } else if (this.sortSettings.settings.sortDirection === 'desc') {
      return SortDirection.none
    } else {
      return SortDirection.asc
    }
  }
}
