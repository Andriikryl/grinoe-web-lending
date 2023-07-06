import { Container } from "@/app/components/container/Container";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import ImageOne from "public/cards/one.png";
import ImageTwo from "public/cards/two.png";
import ImageThree from "public/cards/tree.png";

import DescOne from "public/cards/desc_one.svg";
import DescTwo from "public/cards/desc__two.svg";
import DescThree from "public/cards/desc__three.svg";
import DescFour from "public/cards/desc__four.svg";

export default function Card() {
  return (
    <section className={styles.card}>
      <Container>
        <div className={styles.card__box}>
          <h3 className={styles.card__title}>Choose Your card in the APP</h3>
          <div>
            <ul className={styles.card__list}>
              <li className={styles.list__item}>
                <div className={styles.item__img}>
                  <Image src={ImageOne} height={164} width={264} alt="card" />
                </div>
                <h4 className={styles.item__title}>Lite</h4>
                <span className={styles.item__desription}>Virtual</span>
                <span className={styles.item__desription}>FREE</span>
                <span className={styles.item__desription}>
                  $1000 <br /> daily limit{" "}
                </span>
              </li>
              <li className={styles.list__item}>
                <div className={styles.item__img}>
                  <Image src={ImageOne} height={164} width={264} alt="card" />
                </div>
                <h4 className={styles.item__title}>Life</h4>
                <span className={styles.item__desription}>Real</span>
                <span className={styles.item__desription}>
                  $0 issue fee <br />
                  $9.99/month
                </span>
                <span className={styles.item__desription}>
                  $3 000 <br />
                  daily limit
                </span>
              </li>
              <li className={styles.list__item}>
                <div className={styles.item__img}>
                  <Image src={ImageThree} height={164} width={264} alt="card" />
                </div>
                <h4 className={styles.item__title}>PRO</h4>
                <span className={styles.item__desription}>Real</span>
                <span className={styles.item__desription}>
                  $9.99 issue fee <br /> $9.99/month
                </span>
                <span className={styles.item__desription}>
                  $10 000 <br />
                  daily limit
                </span>
              </li>
            </ul>

            <ul className={styles.list__description}>
              <li className={styles.descr__item}>
                <div className={styles.descr__img}>
                  <Image src={DescOne} width={50} height={50} alt="image" />
                </div>
                <h4 className={styles.descr__title}>
                  Online and offline payments in stores
                </h4>
              </li>
              <li className={styles.descr__item}>
                <div className={styles.descr__img}>
                  <Image src={DescTwo} width={50} height={50} alt="image" />
                </div>
                <h4 className={styles.descr__title}>
                  Connect to Google Pay, Apple Pay, Samsung Pay
                </h4>
              </li>
              <li className={styles.descr__item}>
                <div className={styles.descr__img}>
                  <Image src={DescThree} width={50} height={50} alt="image" />
                </div>
                <h4 className={styles.descr__title}>
                  Withdrawl money from ATM
                </h4>
              </li>
              <li className={styles.descr__item}>
                <div className={styles.descr__img}>
                  <Image src={DescFour} width={50} height={50} alt="image" />
                </div>
                <h4 className={styles.descr__title}>
                  Bind your card to any payment system (netflix, amazon,
                  spotify)
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
