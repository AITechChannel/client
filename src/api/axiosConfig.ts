import axios from 'axios';
import errorConstants from './constants';
import { get } from 'http';
import { store, useAppDispatch } from '@/store/store';
import { refreshToken, refreshTokenSuccess } from '@/features/auth/redux/slice';
import useAuth from '@/features/auth/hooks/useAuth';

export const RequestApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor

RequestApi.interceptors.request.use(
  (config) => {
    let params = config.params || {};
    const token = sessionStorage.getItem('TOKEN');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return {
      ...config,
      params: params
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor

const responseError = (error: any) => {
  console.log('🚀 ::: error:', error);
  if (error.response.status === 401) {
    // console.log(store, useAppDispatch);

    store.dispatch(
      refreshToken({ refreshToken: sessionStorage.getItem('REFRESH_TOKEN') })
    );
  }
};

RequestApi.interceptors.response.use(
  (response) => response.data,
  responseError
  // (error) => {
  //   const status = get(error, 'response.status');
  //   const errorData = get(error, 'response.data');
  //   switch (status) {
  //     case errorConstants.StatusCode.Unauthorized: {
  //       // revokeUser();
  //       window.location.reload();
  //       break;
  //     }
  //     case errorConstants.StatusCode.ValidationFailed:
  //     case errorConstants.StatusCode.BadRequest: {
  //       return Promise.reject({ ...errorData, status });
  //     }
  //     case errorConstants.StatusCode.Forbidden: {
  //       break;
  //     }
  //     case errorConstants.StatusCode.InternalServerError: {
  //       break;
  //     }
  //     case errorConstants.StatusCode.TooManyRequests: {
  //       break;
  //     }
  //   }
  //   return Promise.reject({ ...errorData, status });
  // }
);

// RequestApi.interceptors.response.use(,responseError);

// const responseError = (error) => {};
