import { RequestApi } from '@/api/axiosConfig';
import { ParamsGeNoteList } from '../utils/interface';
import pathURL from './pathURL';

export const getList = async (params?: ParamsGeNoteList) => {
  try {
    return await RequestApi.get(pathURL.note.list, { params });
  } catch (error) {}
};

export const createNote = async (payload: any) => {
  try {
    return await RequestApi.post(pathURL.note.list, payload);
  } catch (error) {
    throw error;
  }
};

export const deleteNote = async (id: number) => {
  try {
    return await RequestApi.delete(pathURL.note.list + '/' + id);
  } catch (error) {
    throw error;
  }
};
