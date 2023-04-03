import { action } from './../../notes/redux/slice';
import { RootState } from '@/store/store';
import { createSlice } from '@reduxjs/toolkit';
import NoteSaga from '@/features/notes/redux/saga';
import {
  removeTokenLocalStorage,
  setRefreshTokenLocalStorage,
  setTokenLocalStorage
} from '@/utils/helpers';

interface AuthState {
  loggedIn: boolean;
  authToken: any;
  userInfo: any;
  isUserLoaded: boolean;
  reloadPage: boolean;
  tokenExpired: boolean;
}

const initialState: AuthState = {
  loggedIn: false,
  authToken: undefined,
  userInfo: undefined,
  isUserLoaded: false,
  reloadPage: false,
  tokenExpired: true
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {},
    register: (state, action) => {},
    registerSuccess: (state, action) => {},
    updateStatusLogin: (state, action) => {
      state.loggedIn = action.payload;
    },
    logout: (state, action) => {},
    loginSuccess: (state, action) => {
      state.loggedIn = true;
      state.authToken = action.payload;
      state.userInfo = action.payload.userInfo;
      setTokenLocalStorage(action.payload.token);
      setRefreshTokenLocalStorage(action.payload.refresh_token);
    },

    logoutSuccess: (state, action) => {
      removeTokenLocalStorage();
      state.loggedIn = false;
    },
    refreshToken: (state, action) => {},
    refreshTokenSuccess: (state, action) => {
      setTokenLocalStorage(action.payload.token);
      state.reloadPage = true;
      state.tokenExpired = false;
    }
  }
});

export const {
  loginSuccess,
  logoutSuccess,
  refreshTokenSuccess,
  login,
  logout,
  refreshToken,
  updateStatusLogin,
  registerSuccess,
  register
} = authSlice.actions;
export const loggedIn = (state: RootState) => state.auth.loggedIn;
export const authToken = (state: RootState) => state.auth.authToken;
export const userInfo = (state: RootState) => state.auth.userInfo;
export const isUserLoaded = (state: RootState) => state.auth.isUserLoaded;
export const reloadPage = (state: RootState) => state.auth.reloadPage;
export const tokenExpired = (state: RootState) => state.auth.tokenExpired;

export default authSlice.reducer;
