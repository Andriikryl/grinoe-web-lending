import { Container } from "@/app/components/container/Container";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

import ImageOne from "public/sponsors/chainal.svg";
import ImageTwo from "public/sponsors/Shapy.svg";
import ImageThree from "public/sponsors/sumsub.svg";
import ImageFour from "public/sponsors/visa 1.svg";
import Mobile from "@/app/icons/Mobile";
import Lock from "@/app/icons/Lock";
import Mess from "@/app/icons/Mess";

export default function Partners() {
  return (
    <section className={styles.partners}>
      <Container>
        <div>
          <h2 className={styles.partners__title}>Our partners:</h2>
          <div>
            <div className={styles.marquee}>
              <ul className={styles.marquee__content}>
                <li className={styles.marquee__item}>
                  <Image
                    src={ImageOne}
                    width={339}
                    height={55}
                    alt="sponsors"
                  />
                </li>
                <li className={styles.marquee__item}>
                  <Image
                    src={ImageTwo}
                    width={194}
                    height={55}
                    alt="sponsors"
                  />
                </li>
                <li className={styles.marquee__item}>
                  <Image
                    src={ImageThree}
                    width={194}
                    height={55}
                    alt="sponsors"
                  />
                </li>
                <li className={styles.marquee__item}>
                  <Image
                    src={ImageFour}
                    width={179}
                    height={55}
                    alt="sponsors"
                  />
                </li>
              </ul>
              <ul className={styles.marquee__content} aria-hidden="true">
                <li className={styles.marquee__item}>
                  <Image
                    src={ImageOne}
                    width={339}
                    height={55}
                    alt="sponsors"
                  />
                </li>
                <li className={styles.marquee__item}>
                  <Image
                    src={ImageTwo}
                    width={194}
                    height={55}
                    alt="sponsors"
                  />
                </li>
                <li className={styles.marquee__item}>
                  <Image
                    src={ImageThree}
                    width={194}
                    height={55}
                    alt="sponsors"
                  />
                </li>
                <li className={styles.marquee__item}>
                  <Image
                    src={ImageFour}
                    width={179}
                    height={55}
                    alt="sponsors"
                  />
                </li>
              </ul>
            </div>
            <div className={styles.box}>
              <ul className={styles.partners__list}>
                <li className={styles.list__item}>
                  <div className={styles.flex__group}>
                    <Mobile />
                    <h3 className={styles.item__title}>Easy to use</h3>
                  </div>
                  <p className={styles.item__descr}>
                    Our APP is simple and easy to use. We have made it both for
                    beginners and crypto geeks.
                  </p>
                </li>
                <li className={styles.list__item}>
                  <div className={styles.flex__group}>
                    <Lock />
                    <h3 className={styles.item__title}>High Security </h3>
                  </div>
                  <p className={styles.item__descr}>
                    We do not store passwords for your account. Access to the
                    wallet occurs through the Passkey crypto protocol using face
                    ID or biometry.
                  </p>
                </li>
                <li className={styles.list__item}>
                  <div className={styles.flex__group}>
                    <Mess />
                    <h3 className={styles.item__title}>
                      Certified & Regulated
                    </h3>
                  </div>
                  <p className={styles.item__descr}>
                    We are a Certified & Regulated company in Australia.
                    Address: Level 14, 5 Martin Place, Sydney, 2000, NSW,
                    Australia
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
