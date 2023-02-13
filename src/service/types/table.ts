export interface IPagination {
  count: number;
  pageNo: number;
  pageSize: number;
}

export interface ITableList {
  list: any[];
  page: IPagination;
}
