import {Injectable} from "@angular/core";
import {SetSearchSettings} from "./set-search-settings";
import {SearchForm} from "../search-form/search-form";
import {InvokeGetEmployees} from "../../invoke-get-employees/invoke-get-employees";
import {SearchSettings} from "../search-settings/search-settings";

@Injectable()
export class SetSearchSettingsService implements SetSearchSettings {
  constructor(
    private searchForm: SearchForm,
    private invokeGetEmployees: InvokeGetEmployees,
    private searchSettings: SearchSettings,
  ) {
  }

  set() {
    const newSearchSettings: Record<string, string> = {};
    const name = this.searchForm.name.value;
    const company = this.searchForm.company.value;

    if (this.isNullOrEmptyString(name)) {
      newSearchSettings['name'] = name;
    }

    if (this.isNullOrEmptyString(company)) {
      newSearchSettings['company'] = company;
    }

    this.searchSettings.setting = newSearchSettings;
    this.invokeGetEmployees.invoke();
  }

  private isNullOrEmptyString(expression: unknown): boolean {
    return expression !== null && expression !== '';
  }
}
