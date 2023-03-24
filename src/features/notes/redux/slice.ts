import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../store/store';
import { Note } from '../api/model';
import { addIndex } from '../utils/helper';

export interface InitNoteSate {
  loading: { noteList: boolean };
  noteList: Note[];
  showModal: {
    addNote: boolean;
  };
  action: {
    name: string | null;
    id: number | null;
  };
  params: any;
}

const initialState: InitNoteSate = {
  loading: { noteList: false },
  noteList: [],
  showModal: {
    addNote: false
  },
  action: {
    name: null,
    id: null
  },
  params: {
    page: 1,
    limit: 10,
    keyword: ''
  }
};

export const myNoteSlice = createSlice({
  name: 'myNote',
  initialState,
  reducers: {
    updateAction: (state, action) => {
      state.action = action.payload;
    },
    updateParams: (state, action) => {
      state.params = action.payload;
    },

    toggleModalAddNote: (state) => {
      state.showModal.addNote = !state.showModal.addNote;
    },

    createNote: (state, aciton) => {},

    fetchNoteList: (state, action) => {
      state.loading.noteList = true;
    },

    fetchNoteSuccess: (state, action) => {
      state.loading.noteList = false;
      state.noteList = addIndex(action.payload);
    },

    fetchNoteFailure: (state, action) => {
      state.loading.noteList = false;
    },

    deleteNote: (state, action) => {},
    deleteNoteSuccess: (state, action) => {}
  }
});

export const {
  toggleModalAddNote,
  fetchNoteList,
  fetchNoteSuccess,
  fetchNoteFailure,
  createNote,
  updateAction,
  updateParams,
  deleteNote
} = myNoteSlice.actions;

export const noteList = (state: RootState) => state.myNote.noteList;
export const showModal = (state: RootState) => state.myNote.showModal;
export const params = (state: RootState) => state.myNote.params;

export default myNoteSlice.reducer;
