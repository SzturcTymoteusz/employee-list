import {Injectable} from '@angular/core';
import {Pagination} from '../../../models/pagination';
import {PaginationSettings} from './pagination-settings';

@Injectable()
export class PaginationSettingsService implements PaginationSettings {
  defaultPageSizeOptions = [5, 10, 15, 20];

  private _settings: Pagination = {
    amountItemsOnPage: 20,
    page: 1,
    hasNextPage: false,
    hasPrevPage: false,
    nextPage: null,
    prevPage: null,
    totalItems: 100,
    totalPages: 100,
    startItemIndex: 1,
    endItemIndex: 20,
  };

  get settings(): Pagination {
    return this._settings;
  }

  set settings(settings: Pagination) {
    this._settings = settings;
  }

  set amountItemsOnPage(amount: number) {
    this._settings.amountItemsOnPage = amount;
  }


  reset() {
    this._settings = {
      amountItemsOnPage: 20,
      page: 1,
      hasNextPage: false,
      hasPrevPage: false,
      nextPage: null,
      prevPage: null,
      totalItems: 100,
      totalPages: 100,
      startItemIndex: 1,
      endItemIndex: 20,
    };
  }
}
