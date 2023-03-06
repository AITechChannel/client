import React from "react";
import { IconLightDark } from "../icons";
import PropsType from "./interface";
import styles from "./style.module.scss";

function Switch(props: PropsType) {
  const { status, onChange, icon } = props;

  return (
    <div
      className={`${styles["switch-wrapper"]} ${
        status === 1 ? styles.active : ""
      }`}
      onClick={onChange}
    >
      {icon ? (
        <div className={`${styles.icon} ${status === 1 ? styles.active : ""}`}>
          {icon}
        </div>
      ) : (
        <div className={`${styles.dot} ${status === 1 ? styles.active : ""}`} />
      )}
    </div>
  );
}

export default Switch;
