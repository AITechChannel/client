import React from "react";
import styles from "./style.module.scss";
import Switch from "@/components/ui/switch";
import { useAppDispatch } from "@/store/store";
import { toggleTheme } from "@/store/common/themeSlice";
import IconLightDark from "@/components/ui/icons/IconLightDark";

function Header() {
  const dispatch = useAppDispatch();

  const onChangeSwitch = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className={styles["header-wrapper"]}>
      <div>LOGO</div>
      <Switch status={1} onChange={onChangeSwitch} icon={<IconLightDark />} />
    </div>
  );
}

export default Header;
