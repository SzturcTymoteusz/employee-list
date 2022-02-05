import {Injectable} from "@angular/core";
import {PageChangeService} from "./page-change.service";

@Injectable({
  providedIn: 'root',
  useClass: PageChangeService
})
export abstract class PageChange {
  abstract goNextPage(): void;

  abstract goPrevPage(): void;

  abstract goLastPage(): void;

  abstract goFirstPage(): void;
}
