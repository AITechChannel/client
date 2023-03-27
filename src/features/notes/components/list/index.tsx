import Button from '@/components/ui/button';
import Table from '@/components/ui/table';
import { useEffect } from 'react';
import useNote from '../../hooks/useNote';
import { ACTION } from '../../utils/constant';
import styles from './style.module.scss';

function List() {
  const {
    detailNote,
    fetchNoteList,
    listNote,
    handleActions,
    fetchNoteListMore
  } = useNote();
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
    // {
    //   name: 'Content',
    //   dataIndex: 'content',
    //   key: 'content',
    //   width: 300,
    //   render: (data: any) => {
    //     return (
    //       <div
    //         className='ck-content'
    //         dangerouslySetInnerHTML={{ __html: data.content }}
    //       />
    //     );
    //   },
    //   align: 'left'
    // },
    {
      name: 'Actions',
      dataIndex: '',
      key: 'actions',
      width: 100,
      render: (data: any) => {
        return (
          <div>
            <button onClick={() => handleActions(ACTION.Delete, data._id)}>
              Del
            </button>
            <button onClick={() => handleActions(ACTION.View, data._id)}>
              view
            </button>
          </div>
        );
      },
      align: 'left'
    }
  ];

  return (
    <div className={styles['list-wrapper']}>
      <div className={styles['table-wrapper']}>
        <Table
          onLoadMore={fetchNoteListMore}
          columns={columns}
          data={listNote}
        />
      </div>
      <div className={styles['content-wrapper']}>
        <div className={styles.header}>
          <h4>Note detail</h4>
          <Button>Create</Button>
        </div>
        <div
          className='ck-content'
          dangerouslySetInnerHTML={{
            __html: detailNote?.content ? detailNote?.content : ''
          }}
        />
      </div>
    </div>
  );
}

export default List;
