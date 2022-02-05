import {Injectable} from '@angular/core';
import {PaginationSettingsService} from './pagination-settings.service';
import {Pagination} from '../../../models/pagination';

@Injectable({
  providedIn: 'root',
  useClass: PaginationSettingsService,
})
export abstract class PaginationSettings {
  abstract defaultPageSizeOptions: number[];

  abstract get settings(): Pagination;

  abstract set settings(settings: Pagination);

  abstract set amountItemsOnPage(amount: number)

  abstract reset(): void;
}
