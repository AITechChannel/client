import { UserLogin } from './model';
import { auth, db } from '../firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from 'firebase/firestore';
import { RequestApi } from '@/api/axiosConfig';
import pathURL from './pathURL';

// const [user, loading, error] = useAuthState(auth);

// export const fetchUserName = async () => {
//   if (!user?.uid) return;
//   try {
//     const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
//     const doc = await getDocs(q);
//     const data = doc.docs[0].data();
//     return data;
//   } catch (err) {
//     console.error(err);
//     //   alert("An error occured while fetching user data");
//   }
// };

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
