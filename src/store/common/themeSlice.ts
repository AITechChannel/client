import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export enum Theme {
  Light = 'theme-light',
  Dark = 'theme-dark'
}

interface ThemeState {
  value: Theme.Dark | Theme.Light;
}

const initialState: ThemeState = {
  value: Theme.Dark
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value === Theme.Dark
        ? (state.value = Theme.Light)
        : (state.value = Theme.Dark);
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export const theme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
