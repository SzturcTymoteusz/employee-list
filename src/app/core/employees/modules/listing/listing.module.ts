import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './components/main/main.component';
import {ListingRoutingModule} from "./listing-routing.module";
import {HeaderComponent} from './components/header/header.component';
import {ListingComponent} from './components/listing/listing.component';
import {SearchComponent} from './components/listing/search/search.component';
import {PaginationComponent} from './components/listing/pagination/pagination.component';
import {TableComponent} from './components/listing/table/table.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../../lib/modules/shared.module";


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ListingComponent,
    SearchComponent,
    PaginationComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ListingModule {
}
