import {Employee} from "../../../../lib/models/employee";

export interface Row {
  items: Employee[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  page: number;
  totalItems: number;
  totalPages: number;
}
