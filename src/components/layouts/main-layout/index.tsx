import React from "react";
import Header from "../header";
import Sidebar from "../side-bar";
import { PropsType } from "./interface";
import { theme, toggleTheme } from "../../../store/common/themeSlice";
import { useAppSelector } from "@/store/store";
import styles from "./style.module.scss";

function MainLayout(props: PropsType) {
  const { children } = props;
  const themeValue = useAppSelector(theme);

  return (
    <>
      <Header />

      <div className={styles.body}>
        <Sidebar />

        <div
          className={`${styles.content} ${
            themeValue === "DARK"
              ? styles["content-dark"]
              : styles["content-light"]
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default MainLayout;
