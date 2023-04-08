import { RequestApi } from '@/api/axiosConfig';
import { ParamsGeNoteList } from '../utils/interface';
import { Note } from './model';
import pathURL from './pathURL';

export const getList = async (params?: ParamsGeNoteList) => {
  try {
    return await RequestApi.get(pathURL.note.list, { params });
  } catch (error) {}
};

export const getNoteDetail = async (id: Number) => {
  try {
    return await RequestApi.get(pathURL.note.list + '/' + id);
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
export const updateNote = async (id: number, payload: Note) => {
  try {
    return await RequestApi.put(pathURL.note.list + '/' + id, payload);
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (payload: any) => {
  try {
    return await RequestApi.post(pathURL.category.list, payload);
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (id: string, payload: any) => {
  try {
    return await RequestApi.put(pathURL.category.list + '/' + id, payload);
  } catch (error) {
    throw error;
  }
};
export const getCategoryList = async (payload: any) => {
  try {
    return await RequestApi.get(pathURL.category.list, payload);
  } catch (error) {
    throw error;
  }
};
