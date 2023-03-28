import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import IconChecked from '../icons/IconChecked';
import IconClose from '../icons/IconClose';
import Modal from '../modal';
import { Item, PropsType } from './interface';
import styles from './style.module.scss';

function Dropdown(props: PropsType) {
  const { items, children, onSelect, placement = 'right' } = props;
  const [showOptions, setShowOptions] = useState<Boolean>(false);
  const [opacityDrop, setOpacityDrop] = useState<any>(0);
  const [coordinates, setCoordinates] = useState<any>();
  const [coordinatesClick, setCoordinatesClick] = useState<any>();

  const dropDownEl = useRef<HTMLDivElement>(null);
  const childrenEl = useRef<any>(null);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target !== dropDownEl.current && e.target !== childrenEl.current) {
        setShowOptions(false);
      }
    });

    return () => {
      window.removeEventListener('click', () => {});
    };
  }, []);

  const handleClickChildren = (e: any) => {
    e.stopPropagation();

    setCoordinatesClick({
      x: e.target.getBoundingClientRect().right,
      y: e.target.getBoundingClientRect().top,
      offsetHeight: childrenEl.current.offsetHeight
    });

    setShowOptions(!showOptions);
  };

  const handleSelect = (e: any, action: any) => {
    e.stopPropagation();
    onSelect(action);
    setShowOptions(false);
  };

  useEffect(() => {
    if (!dropDownEl.current) return;
    if (!showOptions) return;
    if (placement === 'right') {
      setCoordinates({
        x: coordinatesClick.x,
        y: coordinatesClick.y + coordinatesClick.offsetHeight + 8
      });
    }
    if (placement === 'left') {
      setCoordinates({
        x: coordinatesClick.x - dropDownEl.current.offsetWidth,
        y: coordinatesClick.y + coordinatesClick.offsetHeight + 8
      });
    }
    setOpacityDrop(1);
  }, [dropDownEl, showOptions, placement]);

  return (
    <div className={styles['select-wrapper']}>
      <div
        className={styles.children}
        ref={childrenEl}
        onClick={handleClickChildren}
      >
        {children}
      </div>

      {showOptions &&
        createPortal(
          <div
            style={{
              top: coordinates?.y ? coordinates?.y : 0,
              left: coordinates?.x ? coordinates?.x : 0,
              opacity: opacityDrop
            }}
            className={styles['dropdown-wrapper']}
            ref={dropDownEl}
          >
            {items.map((item, index) => (
              <div
                className={styles.item}
                key={index}
                onClick={(e) => handleSelect(e, item.action)}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.label}>{item.label}</span>
              </div>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
}

export default Dropdown;
