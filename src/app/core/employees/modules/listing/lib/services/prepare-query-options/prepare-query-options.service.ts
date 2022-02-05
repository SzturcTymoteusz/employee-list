import {Injectable} from '@angular/core';
import {PrepareQueryOptions} from './prepare-query-options';
import {QueryOption} from '../../models/query-option';
import {PaginationSettings} from '../pagination/pagination-settings/pagination-settings';
import {SortSettings} from '../sort/sort-settings/sort-settings';
import {SearchSettings} from '../search/search-settings/search-settings';

@Injectable()
export class PrepareQueryOptionsService implements PrepareQueryOptions {
  constructor(private pagination: PaginationSettings, private sortSettings: SortSettings, private searchSettings: SearchSettings) {
  }

  prepare(): QueryOption {
    return {
      search: this.searchSettings.setting,
      options: {
        itemsPerPage: this.pagination.settings.amountItemsOnPage,
        page: this.pagination.settings.page,
        sort: {
          sortColumnIndex: this.sortSettings.settings.sortColumnIndex,
          sortDirection: this.sortSettings.settings.sortDirection
        },
      },
    };
  }
}
