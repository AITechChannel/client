import Table from '@/components/ui/table';
import React from 'react';

function List() {
  const columns = [
    {
      name: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 300,
      align: 'left'
    }
    // {
    //   name: 'Age',
    //   dataIndex: 'age',
    //   key: 'age',
    //   width: 300,
    //   render: (data: any) => {
    //     return <button>{data.age}</button>;
    //   },
    //   align: 'left'
    // }
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
      // tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
      // tags: ['loser']
    }
  ];
  return <div>{/* <Table columns={columns} data={data} /> */}</div>;
}

export default List;
