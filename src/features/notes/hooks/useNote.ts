import { detailNote } from './../redux/slice';
import { DefaultParamsTypeNoteList } from './../utils/interface';
import { ACTION, DEFAULT_PARAMS } from '../utils/constant';
import { useAppSelector } from '@/store/store';
import { useDispatch } from 'react-redux';
import {
  fetchNoteList,
  fetchNoteFailure,
  fetchNoteSuccess,
  myNoteSlice,
  noteList,
  showModal,
  toggleModalAddNote,
  updateNote,
  createNote,
  updateAction,
  deleteNote,
  updateParams,
  fetchNoteListMore,
  current_page,
  total_page,
  params,
  loading,
  fetchDetailNote,
  action,
  createCategory,
  fetchCategoryList,
  categoryList,
  updateCategory
} from '../redux/slice';
import { ParamsGeNoteList } from '../utils/interface';
import { Note } from '../api/model';

const useNote = () => {
  const dispatch = useDispatch();
  const _listNote = useAppSelector(noteList);
  const _showModal = useAppSelector(showModal);
  const _params = useAppSelector(params);
  const _current_page = useAppSelector(current_page);
  const _total_page = useAppSelector(total_page);
  const _loading = useAppSelector(loading);
  const _action = useAppSelector(action);
  const _categoryList = useAppSelector(categoryList);
  const _detailNote = useAppSelector(detailNote);

  const _updateCategory = (payload: any) => {
    dispatch(updateCategory(payload));
  };

  const _fetchCategoryList = (params: any) => {
    dispatch(fetchCategoryList(params));
  };

  const _createCategory = (payload: { name: string }) => {
    dispatch(createCategory(payload));
  };

  const _toggleModalAddNote = () => {
    dispatch(toggleModalAddNote());
  };

  const _fetchNoteList = (params?: ParamsGeNoteList) => {
    dispatch(fetchNoteList(params || DEFAULT_PARAMS));
  };

  const _fetchNoteListMore = () => {
    if (
      _current_page === _total_page ||
      !_current_page ||
      _loading.noteListMore
    )
      return;
    const paramsLoadMore = { ..._params, page: _current_page + 1 };
    dispatch(fetchNoteListMore(paramsLoadMore));
  };

  const _createNote = (data: object) => {
    dispatch(createNote(data));
    _toggleModalAddNote();
  };

  const _handleActions = (name: string, id?: number) => {
    dispatch(updateAction({ name, id }));

    if (name === ACTION.Create) {
      _toggleModalAddNote();
    }

    if (name === ACTION.Delete) {
      dispatch(deleteNote(id));
    }

    if (name === ACTION.View) {
      dispatch(fetchDetailNote(id));
    }

    if (name === ACTION.Edit) {
      dispatch(fetchDetailNote(id));
      _toggleModalAddNote();
    }
  };

  const _updateParams = (params: ParamsGeNoteList) => {
    dispatch(updateParams(params));
  };

  const _updateNote = (payload: Note) => {
    _toggleModalAddNote();
    dispatch(updateNote(payload));
  };

  return {
    updateCategory: _updateCategory,
    handleActions: _handleActions,
    listNote: _listNote,
    params: _params,
    showModal: _showModal,
    createNote: _createNote,
    fetchNoteList: _fetchNoteList,
    toggleModalAddNote: _toggleModalAddNote,
    fetchNoteListMore: _fetchNoteListMore,
    detailNote: _detailNote,
    action: _action,
    updateNote: _updateNote,
    createCategory: _createCategory,
    fetchCategoryList: _fetchCategoryList,
    categoryList: _categoryList
  };
};

export default useNote;
