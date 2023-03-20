import { ReactNode } from 'react';
export interface PropsType {
  columns: Array<ColumnsType>;
  data: any[];
}

type ColumnsType = {
  name?: string;
  width?: number | string | undefined;
  render?: () => ReactNode;
  align?: 'left' | 'right' | 'center';
  dataIndex?: string;
  key?: string | number;
};
