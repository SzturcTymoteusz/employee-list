import {Injectable} from "@angular/core";
import {SetActiveSortSettingsService} from "./set-active-sort-settings.service";

@Injectable({
  providedIn: 'root',
  useClass: SetActiveSortSettingsService
})
export abstract class SetActiveSortSettings {
  abstract set(columnIndex: string): void;
}
