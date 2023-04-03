import { useAppDispatch, useAppSelector } from '@/store/store';
import {
  getRefreshTokenLocalStorage,
  getTokenLocalStorage
} from '@/utils/helpers';

import * as firebase from '../firebase';

import { UserLogin } from '../api/model';
import {
  login,
  authSlice,
  logout,
  loggedIn,
  authToken,
  userInfo,
  refreshToken,
  updateStatusLogin,
  reloadPage
} from '../redux/slice';
const useAuth = () => {
  const dispatch = useAppDispatch();

  const _loggedIn = useAppSelector(loggedIn);
  const _authToken = useAppSelector(authToken);
  const _userInfo = useAppSelector(userInfo);
  const _reloadPage = useAppSelector(reloadPage);

  const _refreshToken = () => {
    dispatch(refreshToken({ refreshToken: getRefreshTokenLocalStorage() }));
  };

  const _login = (payload: UserLogin) => {
    dispatch(login(payload));
  };

  const _updateStatusLogin = (payload: boolean) => {
    dispatch(updateStatusLogin(payload));
  };

  const _logout = () => {
    dispatch(logout({ refreshToken: getTokenLocalStorage() }));
    firebase.logout();
  };

  return {
    updateStatusLogin: _updateStatusLogin,
    reloadPage: _reloadPage,
    login: _login,
    logout: _logout,
    loggedIn: _loggedIn,
    authToken: _authToken,
    userInfo: _userInfo,
    refreshToken: _refreshToken
  };
};

export default useAuth;
