import {Injectable} from '@angular/core';
import {Sort} from '../../../models/sort';
import {SortDirection} from '../../../types/sort-direction';
import {SortSettings} from './sort-settings';

@Injectable()
export class SortSettingsService implements SortSettings {
  private _settings: Sort = {
    sortColumnIndex: null,
    sortDirection: SortDirection.none,
  };

  get settings(): Sort {
    return this._settings;
  }

  set settings(settings: Sort) {
    this._settings = settings;
  }

  reset() {
    this._settings = {
      sortColumnIndex: null,
      sortDirection: SortDirection.none,
    };
  }
}
