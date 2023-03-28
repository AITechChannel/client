import React from 'react';
import Header from '../header';
import Sidebar from '../side-bar';
import { PropsType } from './interface';
import { Theme, theme, toggleTheme } from '../../../store/common/themeSlice';
import { useAppSelector } from '@/store/store';
import styles from './style.module.scss';

function MainLayout(props: PropsType) {
  const { children } = props;
  const themeValue = useAppSelector(theme);

  return (
    <div className={themeValue}>
      <Header />

      <div className={styles.body}>
        <Sidebar />

        <div className={`${styles.content} `}>{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
