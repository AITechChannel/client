import { db } from '../firebase';
import { UserLogin } from './model';
import { RequestApi } from '@/api/axiosConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import pathURL from './pathURL';

export const fetchUserFirebase = async (uid: any) => {
  if (!uid) return;
  try {
    const q = query(collection(db, 'users'), where('uid', '==', uid));
    const doc = await getDocs(q);
    const data = doc.docs[0].data();
    return data;
  } catch (err) {
    throw err;
  }
};

export const login = async (payload: UserLogin) => {
  try {
    return await RequestApi.post(pathURL.authenticate.login, payload);
  } catch (error) {
    throw error;
  }
};

export const register = async (payload: UserLogin) => {
  try {
    return await RequestApi.post(pathURL.authenticate.register, payload);
  } catch (error) {
    throw error;
  }
};

export const logout = async (payload: any) => {
  try {
    return await RequestApi.post('/logout', payload);
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async (payload: { refreshToken: string }) => {
  try {
    return await RequestApi.post(pathURL.authenticate.refreshToken, payload);
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = async (id: string | number) => {
  try {
    return await RequestApi.get(pathURL.authenticate.getUserInfo + '/' + id);
  } catch (error) {
    throw error;
  }
};
