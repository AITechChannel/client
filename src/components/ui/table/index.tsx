import React from 'react';
import { PropsType } from './interface';

function Table(props: PropsType) {
  const { columns, data } = props;

  const mapData = (data: any[]) => {
    return data.map((_item: any) =>
      columns.map((_column: any) => {
        return {
          ..._column,
          ..._item,
          value: _item[_column.dataIndex]
        };
      })
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((_column) => (
              <th
                style={{
                  width: _column.width,
                  textAlign: 'left'
                }}
                key={_column.key}
              >
                {_column.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {mapData(data).map((_item: any) => {
            return (
              <tr>
                {_item.map((__item: any) => (
                  <td
                    style={{ width: __item.width }}
                    onClick={() => console.log(__item)}
                  >
                    {__item.render ? __item.render(__item) : __item.value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
