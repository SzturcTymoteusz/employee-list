import { Injectable } from '@angular/core';
import { SortSettingsService } from './sort-settings.service';
import { Sort } from '../../../models/sort';

@Injectable({
  providedIn: 'root',
  useClass: SortSettingsService,
})
export abstract class SortSettings {
  abstract get settings(): Sort;

  abstract set settings(sort: Sort);

  abstract reset(): void;
}
