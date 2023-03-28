import IconEngLish from '@/components/ui/icons/IconEngLish';
import IconMusic from '@/components/ui/icons/IconMusic';
import IconMyNote from '@/components/ui/icons/IconNote';
import IconRelax from '@/components/ui/icons/IconRelax';
import IconTodo from '@/components/ui/icons/IconTodo';
import { theme } from '@/store/common/themeSlice';
import { useAppSelector } from '@/store/store';
import React from 'react';

import styles from './style.module.scss';

function Sidebar() {
  const themeValue = useAppSelector(theme);

  const sidebarItems = [
    {
      name: 'My Note',
      icon: <IconMyNote />,
      childrens: [],
      active: true
    },
    {
      name: 'Todo List',
      icon: <IconTodo />,
      childrens: [],
      active: false
    },
    {
      name: 'Relax',
      icon: <IconRelax />,
      childrens: [],
      active: false
    },
    {
      name: 'My Music',
      icon: <IconMusic />,
      childrens: [],
      active: false
    },
    {
      name: 'English',
      icon: <IconEngLish />,
      childrens: [],
      active: false
    }
  ];

  return (
    <div className={`${styles['side-bar']} ${themeValue}`}>
      {sidebarItems.map((item) => (
        <div
          className={`${styles.item} ${item.active ? styles.active : ''}`}
          key={item.name}
        >
          <span>{item.icon}</span> <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
