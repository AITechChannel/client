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

function Header() {
  const dispatch = useAppDispatch();

  const onChangeSwitch = () => {
    dispatch(toggleTheme());
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

  const themeValue = useAppSelector(theme);
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
        <Dropdown placement='left' onSelect={() => {}} items={profileItems}>
          <div className={styles.avatar}>
            <IconAvatar />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
