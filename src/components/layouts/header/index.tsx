import React from 'react';
import styles from './style.module.scss';
import Switch from '@/components/ui/switch';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { Theme, theme, toggleTheme } from '@/store/common/themeSlice';
import IconLightDark from '@/components/ui/icons/IconLightDark';
import Logo from '../../../assets/logo.png';

function Header() {
  const dispatch = useAppDispatch();

  const onChangeSwitch = () => {
    dispatch(toggleTheme());
  };

  const themeValue = useAppSelector(theme);
  return (
    <div className={`${styles['header-wrapper']} ${themeValue}`}>
      <div className={styles['logo-wrapper']}>
        <img src={Logo} />
      </div>
      <Switch
        status={themeValue === Theme.Dark ? 1 : 0}
        onChange={onChangeSwitch}
        icon={<IconLightDark />}
      />
    </div>
  );
}

export default Header;
