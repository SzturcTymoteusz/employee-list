export interface PaginationSettingsModel {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  page: number;
  totalDocs: number;
  totalPages: number;
}
