import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormRoutingModule} from './form-routing.module';
import {FormComponent} from './components/form/form.component';
import {MainComponent} from "./components/main/main.component";
import {HeaderComponent} from "./components/header/header.component";
import {ReactiveFormsModule} from "@angular/forms";
import {TagsComponent} from "./components/form/tags/tags.component";
import {ButtonActionsComponent} from "./components/form/button-actions/button-actions.component";


@NgModule({
  declarations: [
    FormComponent,
    MainComponent,
    HeaderComponent,
    TagsComponent,
    ButtonActionsComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule {
}
