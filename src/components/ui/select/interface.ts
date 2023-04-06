import { ReactNode } from 'react';
export interface Item {
  id: number;
  label: string;
  icon: ReactNode;
  form?: ReactNode;
}

export interface PropsType {
  items: Item[];
  onChange?: (e: Item) => void;
  placeholder?: string;
  itemChildren?: ReactNode;
  wrapperClassName?: string;
  iconItem?: ReactNode;
}
