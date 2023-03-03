import React, { Children } from 'react';
import { PropsType } from './interface';
import styles from './style.module.scss';

import { createPortal } from 'react-dom';

function Modal(props: PropsType) {
  const { children } = props;
  const modalWrapper = document.getElementById('modal-wrapper');
  if (!modalWrapper) return <></>;

  return createPortal(<div id='modal-wrapper'>{children}</div>, modalWrapper);
}

export default Modal;
