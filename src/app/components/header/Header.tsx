"use client";
import React, { useState } from "react";
import { Container } from "../container/Container";
import Logo from "@/app/icons/Logo";
import styles from "./styles.module.css";
import AppBtn from "../btns/AppBtn";
import GoogleBtn from "../btns/GoogleBtn";
import BurgerButton from "./BurgerButton";

export default function Header() {
  const [activeState, setActiveState] = useState(false);

  const handleClick = () => {
    setActiveState((prev) => !prev);
    // document.body.classList.add("dis-scroll");
  };
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>
          <a className={styles.header__logo} href="#">
            <Logo />
          </a>
          <nav
            className={`${styles.nav} ${activeState ? styles.menu_active : ""}`}
          >
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
          <BurgerButton onClick={handleClick} activeState={activeState} />
        </div>
      </Container>
    </header>
  );
}
