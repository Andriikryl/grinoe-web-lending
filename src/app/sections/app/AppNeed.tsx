import AppBtn from "@/app/components/btns/AppBtn";
import GoogleBtn from "@/app/components/btns/GoogleBtn";
import { Container } from "@/app/components/container/Container";
import Qcod from "@/app/icons/Qcod";
import React from "react";
import styles from "./styles.module.css";
import Phone from "public/app/phone.png";
import Image from "next/image";
export default function AppNeed() {
  return (
    <section className={styles.app}>
      <Container>
        <div className={styles.app__box}>
          <div className={styles.app__info}>
            <h3 className={styles.app__title}>
              one app <br />
              everything you need
            </h3>
            <ol className={styles.app__list}>
              <li className={styles.list__item}>Fiat and crypto accounts</li>
              <li className={styles.list__item}>Exchange crypto to crypto</li>
              <li className={styles.list__item}>Cross Chain ERC-20, TRC-20</li>
            </ol>
            <div className={styles.flex__group}>
              <AppBtn />
              <GoogleBtn />
              <div className={styles.box}>
                <Qcod />
              </div>
            </div>
          </div>
          <div className={styles.app__img}>
            <Image src={Phone} width={300} height={610} alt="phone" />
          </div>
        </div>
      </Container>
    </section>
  );
}
