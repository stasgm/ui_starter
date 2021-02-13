export interface IDataFetch {
  isLoading: boolean;
  isError: boolean;
  status?: string;
}

export interface IItem {
  key: string;
  title: string;
  date: string;
  completed?: string;
  dataIndex?: number;
  onFilter?: (value: string | number | boolean, record: IItem) => boolean;
  render?: (text: string | number | boolean, record: IItem) => boolean;
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
