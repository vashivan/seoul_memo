import { YouTubeBackground } from "@/components/YouTubeBackground";
import Link from "next/link";
import styles from "../styles/MainPage.module.scss";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className={styles.main}>
      <YouTubeBackground videoId="D-F4L5Gfhik" />

      {/* overlay */}
      <div className={styles.overlay} />

      {/* content */}
      <div className={styles.content}>
        <div className={styles.badge}>Seoul memo</div>

        <h1 className={styles.h1}>
          Атмосфера Сеулу — в боксі.
          <br />
          Обери сцену, яку хочеш відчути.
        </h1>

        {/* meta links */}
        <div className={styles.metaRow}>
          {/* <Link href="/order" className={styles.metaLink}>
            Перед замовленням — прочитати
          </Link> */}
          {/* <span className={styles.dot}>•</span> */}
          <Link href="/about" className={styles.metaLink}>
            Про Seoul memo
          </Link>
        </div>


        <p className={styles.p}>
          Це не сувенір і не випадковий набір речей.
          <br />
          Це curated-досвід міста, який зібрано вручну.
        </p>

        <p className={styles.micro}>
          куплено офлайн · зібрано вручну · для вас в сеулі
        </p>

        {/* primary CTA */}
        <div className={styles.actions}>
          <Link href="#boxes" className={styles.primaryBtn}>
            Обрати бокс →
          </Link>
          <Link href="/order" className={styles.secondaryBtn}>
            Як це працює
          </Link>
        </div>

        {/* trust / clarity row
        <div className={styles.valueRow}>
          <div className={styles.valueItem}>
            <span className={styles.valueTitle}>Зібрано вручну</span>
            <span className={styles.valueText}>Речі з Сеулу, без масмаркету</span>
          </div>
          <div className={styles.valueItem}>
            <span className={styles.valueTitle}>Під вас</span>
            <span className={styles.valueText}>Варіанти всередині узгоджуємо</span>
          </div>
          <div className={styles.valueItem}>
            <span className={styles.valueTitle}>Подарунок / спогад</span>
            <span className={styles.valueText}>Для тих, хто був або хоче повернутись</span>
          </div>
        </div> */}

        {/* boxes */}
        <section id="boxes" className={styles.boxes}>
          <div className={styles.boxCard}>
            <div className={styles.boxTop}>
              <div className={styles.boxName}>Seoul Sunset</div>
              <div className={styles.boxPrice}>2600 ₴</div>
            </div>
            <div className={styles.boxDesc}>
              Тепле світло, м’який ритм міста, тиха деталь із вечірнього Сеулу.
            </div>
            <Link href="/seoul-sunset" className={styles.cardBtn}>
              Подивитись бокс →
            </Link>
          </div>

          <div className={styles.boxCard}>
            <div className={styles.boxTop}>
              <div className={styles.boxName}>Seoul Pure Night</div>
              <div className={styles.boxPrice}>2800 ₴</div>
            </div>
            <div className={styles.boxDesc}>
              Нічний догляд, тепле світло, спокій. Ритуал “для себе”.
            </div>
            <Link href="/pure-night" className={styles.cardBtn}>
              Подивитись бокс →
            </Link>
          </div>

          <div className={styles.boxCard}>
            <div className={styles.boxTop}>
              <div className={styles.boxName}>Seoul Mugbang</div>
              <div className={styles.boxPrice}>2400 ₴</div>
            </div>
            <div className={styles.boxDesc}>
              7-Eleven світло, пар від локшини, тиша за вікном. Нічна сцена.
            </div>
            <Link href="/mugbang" className={styles.cardBtn}>
              Подивитись бокс →
            </Link>
          </div>
        </section>

        {/* micro CTA */}
        <div className="mt-15">
          <Footer />
        </div>
      </div>
    </main>
  );
}