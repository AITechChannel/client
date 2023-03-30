import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface AuthState {
  loggedIn: boolean;
  authToken: string | undefined;
  userInfo: any;
  isUserLoaded: boolean;
}

const initialState: AuthState = {
  loggedIn: false,
  authToken: undefined,
  userInfo: undefined,
  isUserLoaded: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.loggedIn = true;
      state.userInfo = action.payload;
    },
    logoutSuccess: (state) => {
      state.loggedIn = false;
    }
  }
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export const loggedIn = (state: RootState) => state.auth.loggedIn;
export const authToken = (state: RootState) => state.auth.authToken;
export const userInfo = (state: RootState) => state.auth.userInfo;
export const isUserLoaded = (state: RootState) => state.auth.isUserLoaded;

export default authSlice.reducer;
