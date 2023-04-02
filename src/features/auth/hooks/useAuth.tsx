import { useAppDispatch, useAppSelector } from '@/store/store';

import { UserLogin } from '../api/model';
import {
  login,
  authSlice,
  logout,
  loggedIn,
  authToken,
  userInfo,
  refreshToken
} from '../redux/slice';
const useAuth = () => {
  const dispatch = useAppDispatch();

  const _loggedIn = useAppSelector(loggedIn);
  const _authToken = useAppSelector(authToken);
  const _userInfo = useAppSelector(userInfo);
  const _refreshToken = () => {
    dispatch(
      refreshToken({ refreshToken: sessionStorage.getItem('REFRESH_TOKEN') })
    );
  };

  const _login = (payload: UserLogin) => {
    dispatch(login(payload));
  };

  const _logout = () => {
    dispatch(logout({ refreshToken: sessionStorage.getItem('TOKEN') }));
  };

  return {
    login: _login,
    logout: _logout,
    loggedIn: _loggedIn,
    authToken: _authToken,
    userInfo: _userInfo,
    refreshToken: _refreshToken
  };
};

export default useAuth;
