import React from "react";
import styles from "./styles.module.css";
import { Container } from "@/app/components/container/Container";
import Image from "next/image";
import ImageOne from "public/solution/image_one.svg";
export default function Solution() {
  return (
    <section className={styles.solution}>
      <Container>
        <h4 className={styles.solution__title}>
          Grineo is ideal solution for every Digital Currency Users
        </h4>
        <ul className={styles.solution__list}>
          <li className={styles.list__item}>
            <div className={styles.flex__group}>
              <Image src={ImageOne} width={60} height={60} alt="image" />
              <h4 className={styles.item__title}>Regular users</h4>
            </div>
            <p className={styles.item__description}>
              If you/ve been looking for how to convert digital currencies to
              fiat and pay in real life, you/re at the right place.
            </p>
          </li>
          <li className={styles.list__item}>
            <div className={styles.flex__group}>
              <Image src={ImageOne} width={60} height={60} alt="image" />
              <h4 className={styles.item__title}>Payroll users</h4>
            </div>
            <p className={styles.item__description}>
              Do you receive a salary or payment for your services in digital
              currency? No problem. Get USDT or BTC to your Grineo wallet and
              pay with Grineo instantly.
            </p>
          </li>
          <li className={styles.list__item}>
            <div className={styles.flex__group}>
              <Image src={ImageOne} width={60} height={60} alt="image" />
              <h4 className={styles.item__title}>Traders/Miners</h4>
            </div>
            <p className={styles.item__description}>
              Grineo allows you use your earnings from trading and mining to pay
              for services through fiat.
            </p>
          </li>
          <li className={styles.list__item}>
            <div className={styles.flex__group}>
              <Image src={ImageOne} width={60} height={60} alt="image" />
              <h4 className={styles.item__title}>Investors & Active users</h4>
            </div>
            <p className={styles.item__description}>
              Do you have digital currency assets? Convert it to fiat. No P2P,
              no complicated and long exchanges. Easy and in the moment.
            </p>
          </li>
          <li className={styles.list__item}>
            <div className={styles.flex__group}>
              <Image src={ImageOne} width={60} height={60} alt="image" />
              <h4 className={styles.item__title}>Foreign Residents</h4>
            </div>
            <p className={styles.item__description}>
              Do you receive money overseas? Get a trans border transfer with
              digital currencies and spend it on what you want in your country.
            </p>
          </li>
          <li className={styles.list__item}>
            <div className={styles.flex__group}>
              <Image src={ImageOne} width={60} height={60} alt="image" />
              <h4 className={styles.item__title}>Travellers</h4>
            </div>
            <p className={styles.item__description}>
              No need to convert money to local currency when you are on a trip.
              Just send it to your digital wallet and spend it in any country.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
