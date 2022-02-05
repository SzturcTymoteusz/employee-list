import {Injectable} from "@angular/core";
import {IsOpenSearchService} from "./is-open-search.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
  useClass: IsOpenSearchService
})
export abstract class IsOpenSearch {
  abstract isOpen: Observable<boolean>;

  abstract toggle(): void;

  abstract close(): void
}
