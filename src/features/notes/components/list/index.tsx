import Button from '@/components/ui/button';
import Dropdown from '@/components/ui/dropdown';
import IconDelete from '@/components/ui/icons/IconDelete';
import IconEdit from '@/components/ui/icons/IconEdit';
import IconThreeDot from '@/components/ui/icons/IconThreeDot';
import IconView from '@/components/ui/icons/IconView';
import Table from '@/components/ui/table';
import { ColumnsType } from '@/components/ui/table/interface';
import useNote from '../../hooks/useNote';

import { ACTION } from '../../utils/constant';
import styles from './style.module.scss';

const itemActions = [
  {
    label: 'View',
    action: ACTION.View,
    icon: <IconView />
  },
  {
    label: 'Edit',
    action: ACTION.Edit,
    icon: <IconEdit />
  },
  {
    label: 'Delete',
    action: ACTION.Delete,
    icon: <IconDelete />
  }
];

function List() {
  const {
    detailNote,
    fetchNoteList,
    listNote,
    handleActions,
    fetchNoteListMore,
    toggleModalAddNote
  } = useNote();

  const columns: ColumnsType[] = [
    {
      name: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 100,
      align: 'center'
    },
    {
      name: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 300,
      align: 'left',
      render: (data: any) => {
        return (
          <div
            className={styles.title}
            onClick={() => handleActions(ACTION.View, data._id)}
          >
            {data.title}
          </div>
        );
      }
    },
    {
      name: 'Actions',
      dataIndex: '',
      key: 'actions',
      width: 100,
      render: (data: any) => {
        return (
          <Dropdown
            onSelect={(action) => handleActions(action, data._id)}
            items={itemActions}
            placement='left'
          >
            <IconThreeDot className={styles['action-icon']} />
          </Dropdown>
        );
      },
      align: 'center'
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
          <Button onClick={() => handleActions(ACTION.Create)}>Create</Button>
        </div>
        <div
          className={`${styles.content} ck-content`}
          dangerouslySetInnerHTML={{
            __html: detailNote?.content ? detailNote?.content : ''
          }}
        />
      </div>
    </div>
  );
}

export default List;
