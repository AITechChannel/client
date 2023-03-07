import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import IconChecked from "../icons/IconChecked";
import IconClose from "../icons/IconClose";
import Modal from "../modal";
import { Item, PropsType } from "./interface";
import styles from "./style.module.scss";

function Select(props: PropsType) {
  const { items, onChange } = props;
  const [valueInput, setValueInput] = useState<any>("");
  const [itemslected, setItemSelected] = useState<Item[] | []>([]);
  const [showOptions, setShowOptions] = useState<Boolean>(false);
  const [coordinates, setCoordinates] = useState<any>();
  const selectEl = useRef<HTMLInputElement>(null);
  const dropDownEl = useRef<HTMLDivElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  const handleChange = (item: Item, e?: any) => {
    if (!selectEl.current) return;
    if (!inputEl.current) return;
    inputEl.current.focus();
    setCoordinates({
      x: selectEl.current.offsetLeft,
      y: selectEl.current.offsetTop + selectEl.current.offsetHeight
    });
    e?.stopPropagation();
    setShowOptions(true);
    const indexItem = itemslected.findIndex((e) => e.id === item.id);
    if (indexItem === -1) {
      setItemSelected([...itemslected, item]);
      return;
    }
    setItemSelected(() => {
      const _items = [...itemslected];
      _items.splice(indexItem, 1);
      return _items;
    });
  };

  const isSelected = (items: Item[], item: Item) => {
    return items.some((e) => e.id === item.id);
  };

  const handleClickSelect = (e: any) => {
    if (!selectEl.current) return;
    if (!inputEl.current) return;
    inputEl.current.focus();
    e?.stopPropagation();
    setShowOptions(true);
    setCoordinates({
      x: selectEl.current.offsetLeft,
      y: selectEl.current.offsetTop + selectEl.current.offsetHeight + 8
    });
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== dropDownEl.current && e.target !== selectEl.current) {
        setShowOptions(false);
      }
    });

    return () => {
      window.removeEventListener("click", () => {});
    };
  }, []);

  useEffect(() => {
    if (!selectEl.current) return;
    setCoordinates({
      x: selectEl.current.offsetLeft,
      y: selectEl.current.offsetTop + selectEl.current.offsetHeight + 8
    });

    onChange(itemslected);
  }, [itemslected]);

  return (
    <div className={styles["select-wrapper"]}>
      <div
        className={styles["select-input"]}
        ref={selectEl}
        onClick={(e: any) => handleClickSelect(e)}
      >
        <div className={styles.tags}>
          {itemslected.map((item, index) => (
            <div key={item.id} className={styles.tag}>
              <span>{item.label}</span>
              <span onClick={() => handleChange(item)}>
                <IconClose />
              </span>
            </div>
          ))}
          <input ref={inputEl} value={valueInput} />
        </div>
      </div>

      {showOptions &&
        createPortal(
          <div
            style={{
              top: coordinates.y,
              left: coordinates.x
            }}
            className={styles["drop-down-wrapper"]}
            ref={dropDownEl}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.item} ${
                  isSelected(itemslected, item) ? styles.active : ""
                }`}
                onClick={(e) => handleChange(item, e)}
              >
                <span className={styles.label}>{item.label}</span>
                <span className={styles.icon}>
                  <IconChecked />
                </span>
              </div>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
}

export default Select;
