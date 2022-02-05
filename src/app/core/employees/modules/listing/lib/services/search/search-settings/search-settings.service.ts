import {Injectable} from '@angular/core';
import {SearchSettings} from './search-settings';
import {Search} from '../../../models/search';

@Injectable()
export class SearchSettingsService implements SearchSettings {
  private _settings: Search = {};

  get setting(): Search {
    return this._settings;
  }

  set setting(settings: Search) {
    this._settings = settings;
  }

  reset() {
    this._settings = {};
  }
}
