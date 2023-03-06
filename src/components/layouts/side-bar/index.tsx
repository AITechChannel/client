import { theme } from "@/store/common/themeSlice";
import { useAppSelector } from "@/store/store";
import React from "react";

import styles from "./style.module.scss";

function Sidebar() {
  const themeValue = useAppSelector(theme);
  return (
    <div
      className={`${styles["side-bar"]} ${
        themeValue === "DARK"
          ? styles["side-bar-dark"]
          : styles["side-bar-light"]
      }`}
    >
      Sidebar
    </div>
  );
}

export default Sidebar;
