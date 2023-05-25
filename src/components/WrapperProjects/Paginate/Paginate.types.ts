export type PaginateType = {
  ShowMore: (selectedItem: { selected: number }) => void;
  size: number;
  limit: number;
  statusLoading: boolean;
  page: number;
};
