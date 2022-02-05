import {Injectable} from "@angular/core";
import {ManageAmountItemsPerPageChangesService} from "./manage-amount-items-per-page-changes.service";

@Injectable({
  providedIn: 'root',
  useClass: ManageAmountItemsPerPageChangesService
})
export abstract class ManageAmountItemsPerPageChanges {
  abstract manage(): void;
}
