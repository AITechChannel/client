import { useAppSelector } from '@/store/store';
import { useDispatch } from 'react-redux';
import {
  fetchNoteList,
  fetchNoteFailure,
  fetchNoteSuccess,
  myNoteSlice,
  noteList
} from '../redux/slice';
import { ParamsGetListNote } from '../utils/interface';

const useNote = () => {
  const dispatch = useDispatch();
  const _listNote = useAppSelector(noteList);

  const _fetchNoteList = (params: ParamsGetListNote) => {
    dispatch(fetchNoteList(params));
  };

  return {
    listNote: _listNote,
    fetchNoteList: _fetchNoteList
  };
};

export default useNote;
