import { RequestApi } from '@/api/axiosConfig';
import { ParamsGetListNote } from '../utils/interface';
import pathURL from './pathURL';

export const getList = async (params?: ParamsGetListNote) => {
  try {
    return await RequestApi.get(pathURL.note.list, { params });
  } catch (error) {}
};
