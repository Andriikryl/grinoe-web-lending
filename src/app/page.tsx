import styles from "./page.module.css";
import AppNeed from "./sections/app/AppNeed";
import Card from "./sections/card/Card";
import Coins from "./sections/coins/Coins";
import Currency from "./sections/currency/Currency";
import Hero from "./sections/hero/Hero";
import Partners from "./sections/partners/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Coins />
      <AppNeed />
      <Card />
      <Currency />
    </>
  );
}
