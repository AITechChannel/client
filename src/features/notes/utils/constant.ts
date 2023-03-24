import { DefaultParamsTypeNoteList } from './interface';

export const LIMIT = 10;

export enum ACTION {
  Delete = 'DELETE',
  View = 'View',
  Edit = 'EDIT',
  Create = 'CREATE'
}

export const DefaultParamsNoteList: DefaultParamsTypeNoteList = {
  keyword: '',
  page: 1,
  limit: LIMIT
};
