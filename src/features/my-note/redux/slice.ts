import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../store/store';

interface CounterState {
  value: number;
  todos: any[];
}

const initialState: CounterState = {
  value: 0,
  todos: []
};

export const myNoteSlice = createSlice({
  name: 'myNote',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = myNoteSlice.actions;

export const count = (state: RootState) => state.myNote.value;

export default myNoteSlice.reducer;
