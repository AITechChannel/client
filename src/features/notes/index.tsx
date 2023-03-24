import MainLayout from '@/components/layouts/main-layout';
import Button from '@/components/ui/button';
import Filter from './components/filter';
import List from './components/list';

import { useAppDispatch } from '@/store/store';

import { useEffect } from 'react';
import Create from './components/create';
import useNote from './hooks/useNote';
import Input from '@/components/ui/input';

function Notes() {
  const dispatch = useAppDispatch();
  const { fetchNoteList, listNote, toggleModalAddNote } = useNote();

  useEffect(() => {
    fetchNoteList();
  }, [dispatch]);

  return (
    <MainLayout>
      <Button type='primary' onClick={toggleModalAddNote}>
        Create
      </Button>
      {/* <Filter /> */}

      <List />

      <Create />
    </MainLayout>
  );
}
export default Notes;
