import { createSlice, current } from '@reduxjs/toolkit';
import type { RootState } from '../../../store/store';
import { Note } from '../api/model';
import { addIndex } from '../utils/helper';

export interface InitNoteSate {
  loading: { noteList: boolean; noteListMore: boolean };
  noteList: Note[];
  detailNote: Note | null;
  total_page: number | null;
  current_page: number | null;
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
  loading: { noteList: false, noteListMore: false },
  noteList: [],
  detailNote: null,
  total_page: null,
  current_page: null,
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
      state.noteList = addIndex(action.payload.data);
      state.total_page = action.payload.total_page;
      state.current_page = action.payload.current_page;
    },

    fetchNoteFailure: (state, action) => {
      state.loading.noteList = false;
    },

    fetchNoteListMore: (state, action) => {
      state.loading.noteListMore = true;
    },

    fetchNoteListMoreSuccess: (state, action) => {
      state.noteList = addIndex([...state.noteList, ...action.payload.data]);
      state.loading.noteListMore = false;
      state.current_page = action.payload.current_page;
    },

    fetchDetailNote: (state, action) => {
      state.loading.noteList = true;
    },

    fetchDetailNoteSuccess: (state, action) => {
      state.detailNote = action.payload;
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
  deleteNote,
  fetchNoteListMore,
  fetchNoteListMoreSuccess,
  fetchDetailNoteSuccess,
  fetchDetailNote
} = myNoteSlice.actions;

export const noteList = (state: RootState) => state.myNote.noteList;
export const showModal = (state: RootState) => state.myNote.showModal;
export const params = (state: RootState) => state.myNote.params;
export const total_page = (state: RootState) => state.myNote.total_page;
export const current_page = (state: RootState) => state.myNote.current_page;
export const loading = (state: RootState) => state.myNote.loading;
export const detailNote = (state: RootState) => state.myNote.detailNote;

export default myNoteSlice.reducer;
