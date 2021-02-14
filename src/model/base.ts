export interface IDataFetch {
  isLoading: boolean;
  isError: boolean;
  status?: string;
}

export interface IField {
  id: number;
  value: string;
}

export interface IListItem {
  id?: number;
  value?: string;
  [key: string]: unknown;
}
