import {Injectable} from "@angular/core";
import {SetPaginationSettingsService} from "./set-pagination-settings.service";
import {Row} from "../../../models/row";

@Injectable({
  providedIn: 'root',
  useClass: SetPaginationSettingsService
})
export abstract class SetPaginationSettings {
  abstract set(data: Row): void
}
