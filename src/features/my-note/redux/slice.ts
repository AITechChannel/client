import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../store/store';

interface CounterState {
  loading: { noteList: boolean };
  noteList: {
    id: number;
    title: string;
    content: string;
  }[];
}

const initialState: CounterState = {
  loading: { noteList: false },
  noteList: []
};

export const myNoteSlice = createSlice({
  name: 'myNote',
  initialState,
  reducers: {
    fetchNoteList: (state, action) => {
      state.loading.noteList = true;

      console.log(action);
    },
    fetchNoteSuccess: (state, action) => {
      state.loading.noteList = false;
      state.noteList = action.payload;
    },
    fetchNoteFailure: (state, action) => {
      state.loading.noteList = false;
    }
  }
});

export const { fetchNoteList, fetchNoteSuccess, fetchNoteFailure } =
  myNoteSlice.actions;

export const noteList = (state: RootState) => state.myNote.noteList;

export default myNoteSlice.reducer;
