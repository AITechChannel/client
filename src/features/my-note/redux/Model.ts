export interface Note {
  id: number;
  title: string;
  content?: string;
}

export interface Response<T> {
  data: T[];
}
