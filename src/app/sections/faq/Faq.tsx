"use client";

import { Container } from "@/app/components/container/Container";
import React from "react";
import styles from "./style.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Plus from "@/app/icons/Plus";
import AppBtn from "@/app/components/btns/AppBtn";
import GoogleBtn from "@/app/components/btns/GoogleBtn";

export default function Faq() {
  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.faq__box}>
          <h4 className={styles.faq__title}>FAQ</h4>
          <Accordion allowZeroExpanded={true} className={styles.accordion}>
            <AccordionItem className={styles.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  <h5 className={styles.accordion__title}>
                    What harsh truths do you prefer to ignore?
                  </h5>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className={styles.accordion__text}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  <h5 className={styles.accordion__title}>
                    What harsh truths do you prefer to ignore?
                  </h5>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className={styles.accordion__text}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  <h5 className={styles.accordion__title}>
                    What harsh truths do you prefer to ignore?
                  </h5>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className={styles.accordion__text}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  <h5 className={styles.accordion__title}>
                    What harsh truths do you prefer to ignore?
                  </h5>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className={styles.accordion__text}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  <h5 className={styles.accordion__title}>
                    What harsh truths do you prefer to ignore?
                  </h5>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className={styles.accordion__text}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  <h5 className={styles.accordion__title}>
                    What harsh truths do you prefer to ignore?
                  </h5>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className={styles.accordion__text}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className={styles.accordion__item}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  <h5 className={styles.accordion__title}>
                    What harsh truths do you prefer to ignore?
                  </h5>
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className={styles.accordion__text}>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div className={styles.btn__group}>
            <AppBtn />
            <GoogleBtn />
          </div>
        </div>
      </Container>
    </section>
  );
}
