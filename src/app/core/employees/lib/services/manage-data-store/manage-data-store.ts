import {Injectable} from "@angular/core";
import {ManageDataStoreService} from "./manage-data-store.service";
import {Employee} from "../../models/employee";

@Injectable({
  providedIn: 'root',
  useClass: ManageDataStoreService
})
export abstract class ManageDataStore {
  abstract edit(employee: Employee): void;

  abstract add(employee: Employee): void;

  abstract checkEmailUniqueness(): (email: string, id?: string) => boolean;
}
