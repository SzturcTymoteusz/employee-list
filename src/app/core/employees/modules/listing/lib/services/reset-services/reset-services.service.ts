import {Injectable} from '@angular/core';
import {ResetServices} from './reset-services';
import {PaginationSettings} from '../pagination/pagination-settings/pagination-settings';
import {SortSettings} from '../sort/sort-settings/sort-settings';
import {SearchSettings} from '../search/search-settings/search-settings';
import {IsOpenSearch} from '../search/is-open-search/is-open-search';
import {PaginationForm} from "../pagination/pagination-form/pagination-form";
import {SearchForm} from "../search/search-form/search-form";

@Injectable()
export class ResetServicesService implements ResetServices {
  constructor(
    private pagination: PaginationSettings,
    private sort: SortSettings,
    private searchSettings: SearchSettings,
    private isOpenSearch: IsOpenSearch,
    private paginationForm: PaginationForm,
    private searchForm: SearchForm,
  ) {
  }

  reset() {
    this.pagination.reset();
    this.sort.reset();
    this.searchSettings.reset();
    this.isOpenSearch.close();
    this.paginationForm.reset();
    this.searchForm.reset();
  }
}
