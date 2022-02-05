import {Injectable} from '@angular/core';
import {IsOpenSearch} from "./is-open-search";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class IsOpenSearchService implements IsOpenSearch {
  private _isOpen = new BehaviorSubject<boolean>(false);
  isOpen = this._isOpen.asObservable();

  toggle(): void {
    this._isOpen.next(!this._isOpen.value);
  }

  close(): void {
    this._isOpen.next(false);
  }
}
