import {Injectable} from "@angular/core";
import {ResetServices} from "./reset-services";
import {Form} from "../form/form";

@Injectable()
export class ResetServicesService implements ResetServices {
  constructor(private form: Form) {
  }

  reset() {
    this.form.reset();
  }
}
