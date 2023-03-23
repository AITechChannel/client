import Table from '@/components/ui/table';
import useNote from '../../hooks/useNote';

function List() {
  const { fetchNoteList, listNote } = useNote();
  const columns = [
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
        return <button>{data.age}</button>;
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
