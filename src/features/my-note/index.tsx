import MainLayout from '@/components/layouts/main-layout';
import Button from '@/components/ui/button';
import Filter from './components/filter';
import List from './components/list';

import { useAppDispatch, useAppSelector } from '@/store/store';

import { count } from './redux/slice';
import { useEffect } from 'react';
import { fetchTodoRequest } from './redux/actions';

function MyNote() {
  const dispatch = useAppDispatch();

  const value = useAppSelector(count);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, []);

  return (
    <MainLayout>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>increase</button>
      <Button type='primary'>Create</Button>
      <Filter />
      <List />
    </MainLayout>
  );
}

export default MyNote;
