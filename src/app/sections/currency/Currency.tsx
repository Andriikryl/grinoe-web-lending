import React from "react";
import style from "./style.module.css";
import { Container } from "@/app/components/container/Container";
import ImageOne from "public/currency/ one.svg";
import ImageTwo from "public/currency/three.svg";
import ImageThree from "public/currency/two.svg";
import Image from "next/image";
export default function Currency() {
  return (
    <section className={style.currency}>
      <Container>
        <div className={style.currency__box}>
          <h3 className={style.currency__title}>
            Convert Digital Currency to Fiat instantly
          </h3>
          <p className={style.currency__description}>
            Funds are converted to fiat in real time at the current rate and
            debited from your digital wallet
          </p>
          <ul className={style.currency__list}>
            <li className={style.list__item}>
              <div className={style.flex__group}>
                <Image src={ImageOne} width={60} height={60} alt="image" />
                <h4 className={style.item__title}>Everywhere</h4>
              </div>
              <p className={style.item__description}>
                Use digital currencies everywhere a Visa card is accepted
              </p>
            </li>

            <li className={style.list__item}>
              <div className={style.flex__group}>
                <Image src={ImageTwo} width={60} height={60} alt="image" />
                <h4 className={style.item__title}>Fast & Easy</h4>
              </div>
              <p className={style.item__description}>
                Very fast & easy process to convert digital currencies to fiat
                just in seconds
              </p>
            </li>

            <li className={style.list__item}>
              <div className={style.flex__group}>
                <Image src={ImageThree} width={60} height={60} alt="image" />
                <h4 className={style.item__title}>Worldwide</h4>
              </div>
              <p className={style.item__description}>
                Use digital currencies for cross-border payments and transfers
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
