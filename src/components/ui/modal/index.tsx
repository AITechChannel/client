import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./style.module.scss";
import React from "react";
import { PropsType } from "./interface";
import IconClose from "../icons/IconClose";

function Modal(props: PropsType) {
  const { children, onCancel, onOK, visible, title } = props;
  const onClickInSide = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      {visible &&
        createPortal(
          <div className={styles["modal-wrapper"]} onClick={onCancel}>
            <div className={styles.modal} onClick={onClickInSide}>
              <div className={styles.header}>
                <h3>{title}</h3>
                <IconClose
                  className={styles["icon-close"]}
                  onClick={onCancel}
                />
              </div>
              <div className={styles.conent}>{children}</div>
              <div className={styles.footer}>
                <button onClick={onCancel}>Close</button>
                <button onClick={onOK}>OK</button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Modal;
