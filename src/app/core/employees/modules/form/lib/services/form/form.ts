import {Injectable} from "@angular/core";
import {FormService} from "./form.service";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root',
  useClass: FormService
})
export abstract class Form {
  abstract get form(): FormGroup;

  abstract get name(): FormControl;

  abstract get company(): FormControl;

  abstract get avatarUrl(): FormControl;

  abstract get address(): FormControl;

  abstract get email(): FormControl;

  abstract get phone(): FormControl;

  abstract get about(): FormControl;

  abstract get tags(): FormControl;

  abstract get id(): FormControl;

  abstract get createdAt(): FormControl;

  abstract reset(): void;
}
