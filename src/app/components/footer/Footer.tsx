import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Logo from "@/app/icons/Logo";
import Facebook from "@/app/icons/Facebook";
import Instagram from "@/app/icons/Instagram";
import Twetter from "@/app/icons/Twetter";
import Tg from "@/app/icons/Tg";
import QarCodB from "@/app/icons/QarCodB";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__box}>
          <a className={styles.logo} href="#">
            <Logo />
          </a>
          <div className={styles.footer__info}>
            <div className={styles.info__top}>
              <ul className={styles.info__list}>
                <li className={styles.list__item}>
                  <a href="#">Home</a>
                </li>
                <li className={styles.list__item}>
                  <a href="#">About us</a>
                </li>
                <li className={styles.list__item}>
                  <a href="#">Wallet</a>
                </li>
                <li className={styles.list__item}>
                  <a href="#">Card</a>
                </li>
                <li className={styles.list__item}>
                  <a href="#">Coins</a>
                </li>
                <li className={styles.list__item}>
                  <a href="#">Fees & limits</a>
                </li>
              </ul>
              <div className={styles.social__group}>
                <h4 className={styles.social__title}>Our socials:</h4>
                <ul className={styles.social__list}>
                  <li className={styles.social__item}>
                    <a href="#">
                      <Facebook />
                    </a>
                  </li>
                  <li className={styles.social__item}>
                    <a href="#">
                      <Instagram />
                    </a>
                  </li>
                  <li className={styles.social__item}>
                    <a href="#">
                      <Twetter />
                    </a>
                  </li>
                  <li className={styles.social__item}>
                    <a href="#">
                      <Tg />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.qar__box}>
                <a href="#">
                  <QarCodB />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
