import Link from "next/link";
import styles from "../styles/AboutPage.module.scss";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.kicker}>Seoul memo</div>
        <h1 className={styles.h1}>Про Seoul memo</h1>
        <p className={styles.p}>
          Ми не “продаємо речі”. Ми збираємо настрій міста так, щоб його можна було
          подарувати або зберегти.
        </p>

        <div className={styles.topLinks}>
          <Link href="/" className={styles.link}>На головну</Link>
          <span className={styles.dot}>•</span>
          <Link href="/order" className={styles.link}>Перед замовленням — прочитати</Link>
          <span className={styles.dot}>•</span>
          <Link href="/seoul-sunset" className={styles.link}>Seoul Sunset</Link>
        </div>
      </header>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2 className={styles.h2}>Що це</h2>
          <p className={styles.text}>
            Seoul memo — це кураторські бокси з Південної Кореї.
            Їхній сенс не в “наборі”, а в поєднанні: запах, текстура, дрібні деталі,
            які викликають спогади або створюють відчуття “ніби я там”.
          </p>
        </article>

        <article className={styles.card}>
          <h2 className={styles.h2}>Як ми збираємо</h2>
          <p className={styles.text}>
            Ми відбираємо речі так, ніби збираємо маленьку історію:
            що відчуваєш на шкірі, що хочеш поставити на полицю, що хочеш взяти з собою.
            Часто — мінімально, але точно.
          </p>
        </article>

        <article className={styles.card}>
          <h2 className={styles.h2}>Для кого</h2>
          <ul className={styles.list}>
            <li>для тих, хто був у Сеулі й сумує за ним</li>
            <li>для тих, хто мріє відчути місто до поїздки</li>
            <li>для подарунка: “ось твій Сеул”</li>
            <li>для себе: як мемо на тиждень/місяць</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h2 className={styles.h2}>Гнучкий формат</h2>
          <p className={styles.text}>
            Бокс можна адаптувати: прибрати/замінити/додати деталі або зібрати зовсім інший.
            Ми завжди погоджуємо фінальну вартість перед відправленням.
          </p>
        </article>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div>
            <h3 className={styles.h3}>Хочеш свій Seoul memo?</h3>
            <p className={styles.ctaText}>
              Почни з Seoul Sunset.
            </p>
          </div>

          <div className={styles.ctaButtons}>
            <Link href="/seoul-sunset" className={styles.primaryBtn}>
              Seoul Sunset
            </Link>
            {/* <Link href="/order" className={styles.secondaryBtn}>
              Зібрати свій бокс
            </Link> */}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Міста залишаються в деталях. Ми збираємо їх в одне ціле — для вас.
        </p>
      </footer>
    </main>
  );
}
