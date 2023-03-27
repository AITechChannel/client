import { ReactElement, ReactNode } from 'react';
export interface PropsType {
  columns: ColumnsType[];
  data: any[];
  onLoadMore: () => void;
}

export interface ColumnsType {
  name?: string;
  width?: number | string | undefined;
  render?: Function;
  align?: string;
  dataIndex?: string;
  key?: string | number;
}
