import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface ThemeState {
  value: "LIGHT" | "DARK";
}

// Define the initial state using that type
const initialState: ThemeState = {
  value: "DARK"
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value === "DARK" ? (state.value = "LIGHT") : (state.value = "DARK");
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export const theme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
