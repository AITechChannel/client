import React, { useState } from "react";
import Modal from "../modal";
import styles from "./style.module.scss";

function Select() {
  const [valueInput, setValueInput] = useState<any>("");
  const [item, setItem] = useState([]);
  return (
    <div className={styles["select-container"]}>
      <div className={styles["select-inner"]}>
        <input value={valueInput} />
      </div>
    </div>
  );
}

export default Select;
