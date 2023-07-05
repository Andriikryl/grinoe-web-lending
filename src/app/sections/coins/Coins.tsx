import { Container } from "@/app/components/container/Container";
import React from "react";
import Card from "public/coins/card2 1.png";
import Phone from "public/coins/phone.png";
import Image from "next/image";
import styles from "./styles.module.css";
import Bts from "@/app/icons/Bts";
import Eth from "@/app/icons/Eth";
import Usd from "@/app/icons/Usd";
import Usdt from "@/app/icons/Usdt";
import Trx from "@/app/icons/Trx";

export default function Coins() {
  return (
    <section className={styles.coins}>
      <Container>
        <div className={styles.coins__box}>
          <div className={styles.coins__img}>
            <div className={styles.coins__card}>
              <Image src={Card} height={267} width={164} alt="card" />
            </div>
            <div className={styles.coins__phone}>
              <Image src={Phone} height={457} width={225} alt="phone" />
            </div>
          </div>

          <div className={styles.coins__info}>
            <div className={styles.coins__innerBox}>
              <h3 className={styles.coins__title}>all major coins</h3>
              <ul className={styles.coins__list}>
                <li className={styles.coins__item}>
                  <Bts />
                  <span className={styles.coins__descr}>BTC</span>
                </li>
                <li className={styles.coins__item}>
                  <Eth />
                  <span className={styles.coins__descr}>ETH</span>
                </li>
                <li className={styles.coins__item}>
                  <Usd />
                  <span className={styles.coins__descr}>USDC</span>
                </li>
                <li className={styles.coins__item}>
                  <Usdt />
                  <span className={styles.coins__descr}>USDT</span>
                </li>
                <li className={styles.coins__item}>
                  <Trx />
                  <span className={styles.coins__descr}>TRX</span>
                </li>
              </ul>
              <div className={styles.box}>
                <button className={styles.coins__btn}>Join Waitlist</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
