import { PropsType } from './interface';
import styles from './style.module.scss';

function Table(props: PropsType) {
  const { columns, data, onLoadMore } = props;

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

  const handleOnScroll = (e: any) => {
    if (
      e.target.scrollTop + e.target.offsetHeight >=
      e.target.scrollHeight - 10
    ) {
      onLoadMore();
    }
  };

  return (
    <table className={styles['table-wrapper']}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              style={{
                width: column.width,
                textAlign: 'left'
              }}
              key={column.name}
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody onScroll={handleOnScroll}>
        {mapData(data).map((item: any, index) => {
          return (
            <tr key={index}>
              {item.map((_item: any, _index: number) => (
                <td
                  style={{ width: _item.width }}
                  onClick={() => console.log(_item)}
                  key={`${item.key}_${_index}`}
                >
                  {_item.render ? _item.render(_item) : _item.value}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
