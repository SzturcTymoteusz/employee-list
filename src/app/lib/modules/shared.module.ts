import {NgModule} from "@angular/core";
import {TransformToDate} from "../pipes/transform-to-date/transform-to-date";
import {ConfirmationDialogComponent} from "../components/confirmation-dialog/confirmation-dialog.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [TransformToDate, ConfirmationDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [TransformToDate, ConfirmationDialogComponent]
})
export class SharedModule {
}
