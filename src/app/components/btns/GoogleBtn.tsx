import React from "react";
import styles from "./styles.module.css";
import Google from "@/app/icons/Google";

export default function GoogleBtn() {
  return (
    <button className={styles.btn}>
      <Google />
      <span>google play</span>
    </button>
  );
}
