import React from "react";
import styles from "./styles.module.css";
import App from "@/app/icons/App";
export default function AppBtn() {
  return (
    <button className={styles.btn}>
      <App />
      <span>App store</span>
    </button>
  );
}
