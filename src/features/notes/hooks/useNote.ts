import { DefaultParamsTypeNoteList } from './../utils/interface';
import { ACTION, DefaultParamsNoteList } from '../utils/constant';
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
  createNote,
  updateAction,
  deleteNote,
  updateParams,
  params
} from '../redux/slice';
import { ParamsGeNoteList } from '../utils/interface';

const useNote = () => {
  const dispatch = useDispatch();
  const _listNote = useAppSelector(noteList);
  const _showModal = useAppSelector(showModal);
  const _params = useAppSelector(params);

  const _toggleModalAddNote = () => {
    dispatch(toggleModalAddNote());
  };

  const _fetchNoteList = (params?: ParamsGeNoteList) => {
    dispatch(fetchNoteList(params || DefaultParamsNoteList));
  };

  const _createNote = (data: object) => {
    dispatch(createNote(data));
  };

  const _handleActions = (name: string, id: number) => {
    dispatch(updateAction({ name, id }));

    if (name === ACTION.Delete) {
      dispatch(deleteNote(id));
    }
  };

  const _updateParams = (params: ParamsGeNoteList) => {
    dispatch(updateParams(params));
  };

  return {
    handleActions: _handleActions,
    listNote: _listNote,
    params: _params,
    showModal: _showModal,
    createNote: _createNote,
    fetchNoteList: _fetchNoteList,
    toggleModalAddNote: _toggleModalAddNote
  };
};

export default useNote;
