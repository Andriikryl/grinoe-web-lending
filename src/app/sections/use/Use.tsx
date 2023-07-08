import React from "react";
import styles from "./styles.module.css";
import { Container } from "@/app/components/container/Container";
import Arrow from "@/app/icons/Arrow";

export default function Use() {
  return (
    <section className={styles.use}>
      <Container>
        <h4 className={styles.use__title}>
          how to use <Arrow />
        </h4>
        <p className={styles.use__description}>
          3 Easy steps and Grineo card in your pocket
        </p>
        <ul className={styles.use__list}>
          <li className={styles.list__item}>
            <h5 className={styles.item__title}>Install the APP</h5>
            <p className={styles.item_description}>
              Download the APP from AppStore or Google Play
            </p>
          </li>
          <li className={styles.list__item}>
            <h5 className={styles.item__title}>Top Up Digital Currency</h5>
            <p className={styles.item_description}>
              make the registration and deposit funds from preferable digital
              currency
            </p>
          </li>
          <li className={styles.list__item}>
            <h5 className={styles.item__title}>Get the card & Pay</h5>
            <p className={styles.item_description}>
              order the Grineo card, link to your digital wallet & Pay
            </p>
          </li>
        </ul>
        <div className={styles.btn__box}>
          <button className={styles.use__btn}>Join The Waitlist</button>
        </div>
      </Container>
    </section>
  );
}
