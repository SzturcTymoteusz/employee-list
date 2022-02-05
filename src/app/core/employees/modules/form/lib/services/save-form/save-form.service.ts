import {Injectable} from "@angular/core";
import {SaveForm} from "./save-form";
import {Form} from "../form/form";
import {ManageDataStore} from "../../../../../lib/services/manage-data-store/manage-data-store";
import {Employee} from "../../../../../lib/models/employee";
import {Router} from "@angular/router";

@Injectable()
export class SaveFormService implements SaveForm {

  constructor(private form: Form, private manageDataStore: ManageDataStore, private router: Router) {
  }

  save() {
    const employee = this.form.form.value as Employee;
    if (this.form.id.value) {
      this.manageDataStore.edit(employee);
    } else {
      this.manageDataStore.add(employee);
    }

    this.router.navigateByUrl('employee/listing');
  }
}
