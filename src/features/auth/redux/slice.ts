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
  readyLogin: boolean;
  userFirebaseInfo: any;
}

const initialState: AuthState = {
  loggedIn: false,
  authToken: undefined,
  userInfo: undefined,
  isUserLoaded: false,
  reloadPage: false,
  tokenExpired: true,
  readyLogin: false,
  userFirebaseInfo: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {},
    getUserInfo: (state, action) => {},
    getUserInfoSuccess: (state, action) => {
      state.userInfo = {
        ...action.payload,
        firstName: action.payload?.username?.split(' ').slice(0, 2).join(' '),
        lastname: action.payload?.username?.split(' ').pop()
      };
    },
    register: (state, action) => {},
    registerSuccess: (state, action) => {
      state.readyLogin = true;
      state.userInfo = {
        ...action.payload
      };
    },

    fetchUserFirebase: (state, action) => {},
    fetchUserFirebaseSuccess: (state, action) => {
      state.userFirebaseInfo = {
        ...action.payload,
        username: action.payload.name
      };
    },
    registerFailed: (state, action) => {},
    updateStatusLogin: (state, action) => {
      state.loggedIn = action.payload;
    },
    logout: (state, action) => {},
    loginSuccess: (state, action) => {
      state.loggedIn = true;
      state.authToken = action.payload;
      setTokenLocalStorage(action.payload.token);
      setRefreshTokenLocalStorage(action.payload.refresh_token);
    },

    logoutSuccess: (state, action) => {
      removeTokenLocalStorage();
      state.loggedIn = false;
      window.location.replace('/login');
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
  register,
  registerFailed,
  fetchUserFirebase,
  fetchUserFirebaseSuccess,
  getUserInfo,
  getUserInfoSuccess
} = authSlice.actions;

export const loggedIn = (state: RootState) => state.auth.loggedIn;
export const authToken = (state: RootState) => state.auth.authToken;
export const userInfo = (state: RootState) => state.auth.userInfo;
export const isUserLoaded = (state: RootState) => state.auth.isUserLoaded;
export const reloadPage = (state: RootState) => state.auth.reloadPage;
export const tokenExpired = (state: RootState) => state.auth.tokenExpired;
export const readyLogin = (state: RootState) => state.auth.readyLogin;
export const userFirebaseInfo = (state: RootState) =>
  state.auth.userFirebaseInfo;

export default authSlice.reducer;
