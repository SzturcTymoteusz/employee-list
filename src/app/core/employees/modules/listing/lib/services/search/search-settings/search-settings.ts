import {Injectable} from '@angular/core';
import {SearchSettingsService} from './search-settings.service';
import {Search} from '../../../models/search';

@Injectable({
  providedIn: 'root',
  useClass: SearchSettingsService,
})
export abstract class SearchSettings {
  abstract get setting(): Search;

  abstract set setting(settings: Search);

  abstract reset(): void;
}
