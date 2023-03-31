import { RootState } from '@/store/store';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  loggedIn: boolean;
  authToken: any;
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
    login: (state, action) => {},
    logout: (state, action) => {},
    loginSuccess: (state, action) => {
      state.loggedIn = true;
      state.authToken = action.payload;
      state.userInfo = action.payload.userInfo;
      sessionStorage.setItem('TOKEN', action.payload.token);
    },

    logoutSuccess: (state, action) => {
      sessionStorage.removeItem('TOKEN');
      state.loggedIn = false;
    },
    refreshTokenSuccess: (state) => {}
  }
});

export const {
  loginSuccess,
  logoutSuccess,
  refreshTokenSuccess,
  login,
  logout
} = authSlice.actions;
export const loggedIn = (state: RootState) => state.auth.loggedIn;
export const authToken = (state: RootState) => state.auth.authToken;
export const userInfo = (state: RootState) => state.auth.userInfo;
export const isUserLoaded = (state: RootState) => state.auth.isUserLoaded;

export default authSlice.reducer;
