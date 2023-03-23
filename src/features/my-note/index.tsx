import MainLayout from '@/components/layouts/main-layout';
import Button from '@/components/ui/button';
import Filter from './components/filter';
import List from './components/list';

import { useAppDispatch, useAppSelector } from '@/store/store';

import { useEffect } from 'react';
import useNote from './hooks/useNote';
import Editor from '@/components/ui/editor';

function MyNote() {
  const dispatch = useAppDispatch();
  const { fetchNoteList, listNote } = useNote();
  console.log('🚀 ::: listNote:', listNote);

  useEffect(() => {
    fetchNoteList({ page: 2 });
  }, [dispatch]);

  return (
    // <MainLayout>
    //   <button onClick={() => dispatch({ type: 'INCREMENT' })}>increase</button>
    //   <Button type='primary'>Create</Button>
    //   <Filter />
    //   <List />
    //   <Editor />
    // </MainLayout>

    <Editor />
  );
}
export default MyNote;
