import MainLayout from '@/components/layouts/main-layout';
import Button from '@/components/ui/button';
import Filter from './components/filter';
import List from './components/list';

import { useAppDispatch } from '@/store/store';

import { useEffect } from 'react';
import Create from './components/create';
import useNote from './hooks/useNote';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import { Item } from '@/components/ui/select/interface';

function Notes() {
  const dispatch = useAppDispatch();
  const { fetchNoteList, listNote, toggleModalAddNote, showModal } = useNote();

  useEffect(() => {
    fetchNoteList();
  }, [dispatch]);

  return (
    <MainLayout>
      {/* <Button type='primary' onClick={toggleModalAddNote}>
        Create
      </Button> */}
      {/* <Filter /> */}

      <List />

      {showModal.addNote && <Create />}
    </MainLayout>
  );
}
export default Notes;
