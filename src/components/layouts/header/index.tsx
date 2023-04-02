import Dropdown from '@/components/ui/dropdown';
import IconAvatar from '@/components/ui/icons/IconAvatar';
import IconLightDark from '@/components/ui/icons/IconLightDark';
import IconLogout from '@/components/ui/icons/IconLogout';
import Switch from '@/components/ui/switch';
import { logout } from '@/features/auth/firebase';
import { ACTION } from '@/features/notes/utils/constant';
import { Theme, theme, toggleTheme } from '@/store/common/themeSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import Logo from '../../../assets/logo.png';
import styles from './style.module.scss';

import { auth } from '@/features/auth/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@/features/auth/firebase';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import useAuth from '@/features/auth/hooks/useAuth';
import { getTokenSessionStorage } from '@/utils/helpers';

function Header() {
  const dispatch = useAppDispatch();

  const themeValue = useAppSelector(theme);

  // const [user, loading, error] = useAuthState(auth);

  const { loggedIn, authToken, logout, userInfo, refreshToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getTokenSessionStorage()) {
      navigate('/login');
      return;
    }
    navigate('/notes');
  }, [getTokenSessionStorage()]);

  const onChangeSwitch = () => {
    dispatch(toggleTheme());
    refreshToken();
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

  // const fetchUserName = async () => {
  //   if (!user?.uid) return;
  //   try {
  //     const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
  //     const doc = await getDocs(q);
  //     const data = doc.docs[0].data();
  //     dispatch(loginSuccess(data));
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  // useEffect(() => {
  //   if (loading) return;

  //   if (!user) navigate('/login');
  //   fetchUserName();
  // }, [user, loading]);

  // const firstName = _userInfo.name.split(' ').pop().join('');
  // console.log('🚀 ::: _userInfo:', _userInfo);
  // const lastName = _userInfo.name;

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
            <span>{userInfo?.username?.split(' ').slice(0, 2)}</span>
            <span>{userInfo?.username?.split(' ').pop()}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
