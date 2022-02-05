import {Sort} from "./sort";

export interface QueryOption {
  search: { [key: string]: string };
  options: {
    itemsPerPage: number;
    page: number;
    sort: Sort;
  };
}
