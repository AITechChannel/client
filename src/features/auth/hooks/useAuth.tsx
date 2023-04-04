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
  reloadPage,
  register,
  readyLogin,
  fetchUserFirebase,
  userFirebaseInfo
} from '../redux/slice';
const useAuth = () => {
  const dispatch = useAppDispatch();

  const _loggedIn = useAppSelector(loggedIn);
  const _authToken = useAppSelector(authToken);
  const _userInfo = useAppSelector(userInfo);
  const _reloadPage = useAppSelector(reloadPage);
  const _readyLogin = useAppSelector(readyLogin);
  const _useFirebaseInfo = useAppSelector(userFirebaseInfo);

  const _resgister = (payload: any) => {
    dispatch(register(payload));
  };

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

  const _fetchUserFireBase = (payload: any) => {
    dispatch(fetchUserFirebase(payload));
  };

  return {
    updateStatusLogin: _updateStatusLogin,
    reloadPage: _reloadPage,
    login: _login,
    logout: _logout,
    loggedIn: _loggedIn,
    readyLogin: _readyLogin,
    authToken: _authToken,
    userInfo: _userInfo,
    refreshToken: _refreshToken,
    register: _resgister,
    fetchUserFirebase: _fetchUserFireBase,
    userFirebaseInfo: _useFirebaseInfo
  };
};

export default useAuth;
