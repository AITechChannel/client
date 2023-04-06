import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import IconChecked from '../icons/IconChecked';
import { Item, PropsType } from './interface';
import styles from './style.module.scss';

function Select(props: PropsType) {
  const {
    onChange,
    placeholder = 'Please select',
    itemChildren,
    wrapperClassName,
    iconItem
  } = props;

  const [items, setItems] = useState(props.items);
  const [valueInput, setValueInput] = useState<any>('');
  const [itemslected, setItemSelected] = useState<Item>();
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
    setShowOptions(false);
    inputEl.current.blur();
    setItemSelected(item);
    setValueInput('');
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

  const handleChangeInput = (e: any) => {
    setValueInput(e.target.value);
    const itemsFounded = props.items.filter((item) =>
      item.label.includes(e.target.value.trim())
    );
    setItems([...itemsFounded]);
  };

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target !== dropDownEl.current || e.target !== inputEl.current) {
        setShowOptions(false);
      }
    });

    return () => {
      window.removeEventListener('click', () => {});
    };
  }, []);

  useEffect(() => {
    if (!selectEl.current) return;
    setCoordinates({
      x: selectEl.current.offsetLeft,
      y: selectEl.current.offsetTop + selectEl.current.offsetHeight + 8
    });

    if (itemslected && onChange) {
      onChange(itemslected);
    }
  }, [itemslected]);

  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  return (
    <div className={styles['select-wrapper']}>
      <div
        className={styles['select-input']}
        ref={selectEl}
        onClick={(e: any) => handleClickSelect(e)}
      >
        <div className={styles.input}>
          <input
            style={{ width: 20 + valueInput.length * 8 || 20 }}
            ref={inputEl}
            value={valueInput}
            onChange={handleChangeInput}
          />
          <div
            style={{ opacity: valueInput.length ? 0 : 'unset' }}
            className={styles.text}
          >
            {itemslected?.label}

            <div className={styles.placeholder}>
              {!itemslected?.label && placeholder}
            </div>
          </div>
        </div>
      </div>

      {showOptions &&
        createPortal(
          <>
            <div
              className={styles.overlay}
              onClick={() => setShowOptions(false)}
            ></div>
            <div
              style={{
                top: coordinates.y,
                left: coordinates.x,
                width: selectEl.current?.offsetWidth
              }}
              className={`${styles['drop-down-wrapper']} ${wrapperClassName}`}
              ref={dropDownEl}
            >
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`${styles.item} ${
                    itemslected?.id === item.id ? styles.active : ''
                  }`}
                  onClick={(e) => handleChange(item, e)}
                >
                  {!item.form ? (
                    <div className={styles.label}>{item.label}</div>
                  ) : (
                    item.form
                  )}
                  <div className={styles['action-wrapper']}>
                    {item.icon}
                    <span className={styles.icon}>
                      <IconChecked />
                    </span>
                  </div>
                </div>
              ))}

              <div>{itemChildren}</div>
            </div>
          </>,
          document.body
        )}
    </div>
  );
}

export default Select;
