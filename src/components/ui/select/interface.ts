export interface Item {
  id: number;
  label: string;
}

export interface PropsType {
  items: Item[];
  onChange: (e: Item[]) => void;
}
