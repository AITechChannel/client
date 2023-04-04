import Dropdown from '@/components/ui/dropdown';
import IconAvatar from '@/components/ui/icons/IconAvatar';
import IconLightDark from '@/components/ui/icons/IconLightDark';
import IconLogout from '@/components/ui/icons/IconLogout';
import Switch from '@/components/ui/switch';
import { ACTION } from '@/features/notes/utils/constant';
import { Theme, theme, toggleTheme } from '@/store/common/themeSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import Logo from '../../../assets/logo.png';
import styles from './style.module.scss';

import { useEffect } from 'react';

import { useNavigate } from 'react-router';

import useAuth from '@/features/auth/hooks/useAuth';
import { getTokenLocalStorage } from '@/utils/helpers';

function Header() {
  const dispatch = useAppDispatch();
  const themeValue = useAppSelector(theme);
  const { logout, userInfo } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getTokenLocalStorage()) {
      navigate('/login');
      return;
    }
  }, []);

  const onChangeSwitch = () => {
    dispatch(toggleTheme());
  };

  const handleActions = (name: string) => {
    if (name === ACTION.Logout) {
      logout();
    }
  };

  const profileItems = [
    {
      label: 'Profile',
      action: ACTION.Logout,
      icon: <IconAvatar />
    },
    {
      label: 'Logout',
      action: ACTION.Logout,
      icon: <IconLogout />
    }
  ];

  return (
    <div className={`${styles['header-wrapper']}`}>
      <div className={styles['logo-wrapper']}>
        <img src={Logo} />
      </div>
      <div className={styles['header-actions']}>
        <Switch
          status={themeValue === Theme.Dark ? 1 : 0}
          onChange={onChangeSwitch}
          icon={<IconLightDark />}
        />
        <Dropdown
          placement='left'
          onSelect={handleActions}
          items={profileItems}
        >
          <div className={styles.avatar}>
            <IconAvatar />
          </div>
          <div className={styles.name}>
            <span>{userInfo?.firstName}</span>
            <span>{userInfo?.lastname}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
