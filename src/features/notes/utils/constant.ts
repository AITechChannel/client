import { DefaultParamsTypeNoteList } from './interface';

export const LIMIT = 15;

export enum ACTION {
  Delete = 'DELETE',
  View = 'View',
  Edit = 'EDIT',
  Create = 'CREATE'
}

export const DEFAULT_PARAMS: DefaultParamsTypeNoteList = {
  page: 1,
  limit: LIMIT
};
