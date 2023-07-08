import React from "react";
import styles from "./style.module.css";
import { Container } from "@/app/components/container/Container";
import Secur from "@/app/icons/Secur";
export default function Secure() {
  return (
    <section className={styles.secure}>
      <Container>
        <div className={styles.secure__box}>
          <h4 className={styles.secure__title}>stable and secure</h4>
          <ul className={styles.secure__list}>
            <li className={styles.list__item}>
              <Secur />
              <div className={styles.item__info}>
                <h4 className={styles.item__title}>High Secure</h4>
                <p className={styles.item__description}>
                  We use the latest high security standards to to protect your
                  assets with PassKey protocol
                </p>
                <ul className={styles.item__sublist}>
                  <li className={styles.sub__item}>Biometry</li>
                  <li className={styles.sub__item}>FaceID</li>
                </ul>
              </div>
            </li>
            <li className={styles.list__item}>
              <Secur />
              <div className={styles.item__info}>
                <h4 className={styles.item__title}>
                  You card data is fully secured{" "}
                </h4>
                <p className={styles.item__description}>
                  Your safety is our number one priority, so we work with latest
                  worldwide financial standards
                </p>
                <ul className={styles.item__sublist}>
                  <li className={styles.sub__item}>PCI DSS +</li>
                  <li className={styles.sub__item}>GDPR standards</li>
                </ul>
              </div>
            </li>
            <li className={styles.list__item}>
              <Secur />
              <div className={styles.item__info}>
                <h4 className={styles.item__title}>
                  Certified & Regulated company in Australia
                </h4>
                <ul className={styles.item__sublist}>
                  <li className={styles.sub__item}>
                    Digital currency exchange
                  </li>
                  <li className={styles.sub__item}>Money remittance</li>
                </ul>
                <p className={styles.item__description}>
                  Address: Level 14, 5 Martin Place, Sydney, 2000, NSW,
                  Australia
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
