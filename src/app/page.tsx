import styles from "./page.module.css";
import AppNeed from "./sections/app/AppNeed";
import Coins from "./sections/coins/Coins";
import Hero from "./sections/hero/Hero";
import Partners from "./sections/partners/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Coins />
      <AppNeed />
    </>
  );
}
