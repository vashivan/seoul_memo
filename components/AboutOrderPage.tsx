import Link from "next/link";
import styles from "../styles/AboutOrder.module.scss";
import { OrderInfoAccordion } from "../components/Accordeon";

export default function BeforeOrderPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.kicker}>Seoul memo</div>
        <h1 className={styles.h1}>Перед замовленням — прочитати</h1>
        <p className={styles.p}>
          Коротко й прозоро: ціна, доставка, кастомізація та як усе відбувається.
        </p>

        <div className={styles.topLinks}>
          <Link href="/" className={styles.link}>
            На головну
          </Link>
          <span className={styles.dot}>•</span>
          <Link href="/about" className={styles.link}>
            Про Seoul memo
          </Link>
        </div>
      </header>

      <section className={styles.card}>
        <OrderInfoAccordion boxPrice="уточнюється індивідуально" />
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Seoul memo — це зібрана атмосфера, а не “готовий товар”.
          Якщо маєш особливий запит — просто напиши його у формі.
        </p>
      </footer>
    </main>
  );
}
