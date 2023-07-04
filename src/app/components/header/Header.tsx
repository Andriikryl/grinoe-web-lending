import React from "react";
import { Container } from "../container/Container";
import Logo from "@/app/icons/Logo";
import styles from "./styles.module.css";
import AppBtn from "../btns/AppBtn";
import GoogleBtn from "../btns/GoogleBtn";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>
          <a className={styles.header__logo} href="#">
            <Logo />
          </a>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  Home
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  card
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  FAQ
                </a>
              </li>
              <li className={styles.list__item}>
                <a className={styles.list__link} href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className={styles.flex__group}>
              <AppBtn />
              <GoogleBtn />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
