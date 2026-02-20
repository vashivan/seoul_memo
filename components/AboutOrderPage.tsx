import Link from "next/link";
import styles from "../styles/AboutOrder.module.scss";
import { OrderInfoAccordion } from "../components/Accordeon";

export default function BeforeOrderPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.kicker}>Seoul memo</div>

        <div className={styles.topLinks}>
          <Link href="/" className={styles.link}>
            На головну
          </Link>
          <span className={styles.dot}>•</span>
          <Link href="/about" className={styles.link}>
            Про Seoul memo
          </Link>
          {/* <span className={styles.dot}>•</span>
          <Link href="/seoul-sunset" className={styles.link}>
            Seoul Sunset
          </Link> */}
        </div>

        <h1 className={styles.h1}>Перед замовленням — прочитати</h1>

        <p className={styles.p}>
          Це не “готовий товар зі складу”.
          <br />
          Seoul memo — curated box experience, який ми збираємо під твій запит.
          <br />
          Нижче — коротко і прозоро: як усе відбувається, доставка та оплата.
        </p>
      </header>

      {/* quick flow */}
      <section className={styles.card}>
        <h2 className={styles.h2}>Як це працює</h2>

        <ol className={styles.steps}>
          <li className={styles.step}>
            <div className={styles.stepTitle}>1) Обираєш настрій</div>
            <div className={styles.stepText}>
              Можеш почати з готового боксу (Sunset / Pure Night / Mugbang) або описати свій запит.
            </div>
          </li>

          <li className={styles.step}>
            <div className={styles.stepTitle}>2) Узгоджуємо деталі</div>
            <div className={styles.stepText}>
              Ми підтверджуємо склад, можливі заміни та фінальну вартість перед відправкою.
            </div>
          </li>

          <li className={styles.step}>
            <div className={styles.stepTitle}>3) Відправляємо</div>
            <div className={styles.stepText}>
              Збираємо бокс у Сеулі та відправляємо в Україну. Трек-номер — після відправки.
            </div>
          </li>
        </ol>
      </section>

      {/* key points */}
      <section className={styles.card}>
        <h2 className={styles.h2}>Ціна, доставка, оплата</h2>

        <div className={styles.facts}>
          <div className={styles.fact}>
            <div className={styles.factTitle}>Ціна</div>
            <div className={styles.factText}>
              Залежить від складу та курсу/доставки. Ми завжди узгоджуємо фінальну вартість перед відправкою.
            </div>
          </div>

          <div className={styles.fact}>
            <div className={styles.factTitle}>Доставка</div>
            <div className={styles.factText}>
              Відправка з Кореї. Орієнтовно 7–14 днів (залежить від служби та міста).
            </div>
          </div>

          <div className={styles.fact}>
            <div className={styles.factTitle}>Кастомізація</div>
            <div className={styles.factText}>
              Можемо прибрати / замінити / додати деталі. Якщо шукаєш конкретну річ у Сеулі — теж ок.
            </div>
          </div>

          <div className={styles.fact}>
            <div className={styles.factTitle}>Оплата</div>
            <div className={styles.factText}>
              Після підтвердження складу та вартості. Ніяких “сюрпризів” після.
            </div>
          </div>
        </div>
      </section>

      {/* accordion (details) */}
      <section className={styles.card}>
        <h2 className={styles.h2}>Детальніше</h2>
        <p className={styles.small}>
          Якщо хочеш прочитати все по пунктах — ось короткий FAQ.
        </p>
        <OrderInfoAccordion boxPrice="уточнюється індивідуально" />
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div>
            <h3 className={styles.h3}>Хочеш свій Seoul memo?</h3>
            <p className={styles.ctaText}>
              Напиши кілька слів про запит — і ми запропонуємо варіант боксу та узгодимо деталі.
            </p>
          </div>

          <div className={styles.ctaButtons}>
            <Link href="/about#form" className={styles.primaryBtn}>
              Залишити заявку
            </Link>

            <Link
              href="https://www.instagram.com/seoul.memo/"
              className={styles.secondaryBtn}
              target="_blank"
              rel="noreferrer"
            >
              Написати в Instagram
            </Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Seoul memo — це зібрана атмосфера, а не “готовий товар”.
          <br />
          Якщо маєш особливий запит — залиш його у формі. Ми відповідаємо протягом 24 годин.
        </p>
      </footer>
    </main>
  );
}