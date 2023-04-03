import jwt_decode from 'jwt-decode';
import { refreshToken } from '@/features/auth/api/request';
import {
  getRefreshTokenLocalStorage,
  getTokenLocalStorage,
  setRefreshTokenLocalStorage
} from '@/utils/helpers';
import { RequestApi } from './axiosConfig';

export const responseError = async (error: any) => {
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
  prevRequest.sent = false;

  if (error.response.status === 401 && !prevRequest?.sent) {
    prevRequest.sent = true;
    const newAccessToken: any = await refreshToken({
      refreshToken: getRefreshTokenLocalStorage() || ''
    });
    setRefreshTokenLocalStorage(newAccessToken.token);
    return RequestApi(prevRequest);

    // store.dispatch(
    //   refreshToken({ refreshToken: getRefreshTokenLocalStorage() })
    // );
  }
};
