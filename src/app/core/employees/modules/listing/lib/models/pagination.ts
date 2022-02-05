export interface Pagination {
  amountItemsOnPage: number;
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  totalItems: number;
  totalPages: number;
  startItemIndex: number;
  endItemIndex: number | null;
}
