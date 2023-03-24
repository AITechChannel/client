import Button from '@/components/ui/button';
import Table from '@/components/ui/table';
import { useEffect } from 'react';
import useNote from '../../hooks/useNote';
import { ACTION } from '../../utils/constant';

function List() {
  const { fetchNoteList, listNote, handleActions } = useNote();
  const columns = [
    {
      name: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 80,
      align: 'left'
    },
    {
      name: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 300,
      align: 'left'
    },
    {
      name: 'Content',
      dataIndex: 'content',
      key: 'content',
      width: 300,
      render: (data: any) => {
        return (
          <div
            className='ck-content'
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        );
      },
      align: 'left'
    },
    {
      name: 'Actions',
      dataIndex: '',
      key: 'actions',
      width: 100,
      render: (data: any) => {
        return (
          <Button onClick={() => handleActions(ACTION.Delete, data._id)}>
            Del
          </Button>
        );
      },
      align: 'left'
    }
  ];

  return (
    <div>
      <Table columns={columns} data={listNote} />
    </div>
  );
}

export default List;
