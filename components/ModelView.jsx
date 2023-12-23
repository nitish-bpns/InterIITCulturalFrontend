import React from "react";
import Floor from "./Floor";
import styles from "./ModelView.module.css";

function ModelView() {
  return (
    <div className={styles.modelFrame}>
      <Floor />
    </div>
  );
}

export default ModelView;
