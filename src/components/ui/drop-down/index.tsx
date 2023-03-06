import React from 'react';
import IconChecked from '../icons/IconChecked';
import { PropsType } from './interface';
import styles from './style.module.scss';

function Dropdown(props: PropsType) {
  const { items } = props;
  return (
    <div className={styles['drop-down-wrapper']}>
      {items.map((item, index) => (
        <div className={styles.item}>
          <span>{item.label}</span>

          <IconChecked />
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
