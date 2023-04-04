import { refreshToken } from '@/features/auth/api/request';
import { getTokenLocalStorage } from '@/utils/helpers';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {
  getRefreshTokenLocalStorage,
  setTokenLocalStorage
} from '../utils/helpers';

export const RequestApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

RequestApi.interceptors.request.use(
  (config) => {
    let params = config.params || {};
    const token = getTokenLocalStorage();
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

const responseError = async (error: any) => {
  if (!getTokenLocalStorage()) return;
  const decodedToken: any = jwt_decode(getTokenLocalStorage() || '');

  const decodedRefreshToken: any = jwt_decode(
    getRefreshTokenLocalStorage() || ''
  );

  const tokenExpried = () => {
    return decodedToken.exp < Math.floor(Date.now() / 1000);
  };

  const refreshTokenExpried = () => {
    return decodedRefreshToken.exp < Math.floor(Date.now() / 1000);
  };

  if (!tokenExpried() || refreshTokenExpried()) return;

  const prevRequest = error?.config;
  if (error.response.status === 401 && !prevRequest?.sent) {
    prevRequest.sent = true;
    const newAccessToken: any = await refreshToken({
      refreshToken: getRefreshTokenLocalStorage() || ''
    });
    setTokenLocalStorage(newAccessToken.token);
    return RequestApi(prevRequest);

    // store.dispatch(
    //   refreshToken({ refreshToken: getRefreshTokenLocalStorage() })
    // );
  }

  return Promise.reject(error);
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
