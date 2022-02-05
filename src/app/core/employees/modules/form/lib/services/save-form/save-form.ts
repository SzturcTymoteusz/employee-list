import {Injectable} from "@angular/core";
import {SaveFormService} from "./save-form.service";

@Injectable({
  providedIn: 'root',
  useClass: SaveFormService
})
export abstract class SaveForm {
  abstract save(): void;
}
