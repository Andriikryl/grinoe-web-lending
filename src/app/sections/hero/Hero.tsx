import { Container } from "@/app/components/container/Container";
import React from "react";
import HeroImage from "public/hero/hero-fone.png";
import HeroCard from "public/hero/hero-card.png";
import styles from "./style.module.css";
import Image from "next/image";
import AppBtn from "@/app/components/btns/AppBtn";
import GoogleBtn from "@/app/components/btns/GoogleBtn";
import Qcod from "@/app/icons/Qcod";
import { TiltEffect } from "./CardEff";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__box}>
          <div className={styles.flex__group}>
            <div>
              <Image
                src={HeroImage}
                width={236}
                height={480}
                alt="mobile fhone"
              />
            </div>
            {/* <div>
              <Image src={HeroCard} width={277} height={172} alt="card" />
            </div> */}
            <TiltEffect />
          </div>
          <div className={styles.hero__info}>
            <h1 className={styles.hero__title}>Future of Personal Finance</h1>
            <span className={styles.hero__subTitle}>
              Pay with Stablecoins everywhere in the World
            </span>
            <div className={styles.btn__group}>
              <AppBtn />
              <GoogleBtn />
              <Qcod />
            </div>
            <button className={styles.hero__btnM}>Download the app</button>
            <span className={styles.hero__descr}>
              Visa Card & Crypto Wallet in one APP
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
