import {Component} from '@angular/core';
import {SearchForm} from "../../../lib/services/search/search-form/search-form";
import {SetSearchSettings} from "../../../lib/services/search/set-search-settings/set-search-settings";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(public searchForm: SearchForm, public setSearchSettings: SetSearchSettings) {
  }
}
