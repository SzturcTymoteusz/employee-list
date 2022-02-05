import {Injectable} from "@angular/core";
import {SetSearchSettingsService} from "./set-search-settings.service";

@Injectable({
  providedIn: 'root',
  useClass: SetSearchSettingsService
})
export abstract class SetSearchSettings {
  abstract set(): void;
}
