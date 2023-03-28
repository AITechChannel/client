import { ReactNode } from 'react';
export type Item = {
  action: string;
  label: string;
  icon?: ReactNode;
};

export interface PropsType {
  items: Item[];
  onSelect: (action: any) => void;
  children: ReactNode;
  placement?: string;
  // onChange: (e: Item[]) => void;
}
