import React, { useState } from 'react';
import styles from './style.module.scss';

function Select() {
  const [valueInput, setValueInput] = useState<any>('');
  return (
    <div className={styles['select-container']}>
      <div className={styles['select-inner']}>
        <input value={valueInput} />
      </div>
    </div>
  );
}

export default Select;
