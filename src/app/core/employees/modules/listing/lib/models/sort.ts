import { SortDirection } from '../types/sort-direction';

export interface Sort {
  sortColumnIndex: string | null;
  sortDirection: SortDirection;
}
