import { YouTubeBackground } from "@/components/YouTubeBackground";
import Link from "next/link";
import styles from "../styles/MainPage.module.scss";

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
          Міста залишаються в деталях.
          <br />
          Ми збираємо їх для вас.
        </h1>

        <p className={styles.p}>
          Атмосферні бокси з Сеулу. Подарунок або спогад.
          <br />
          Зібрано вручну. Узгоджується під вас.
        </p>

        <div className={styles.actions}>
          <Link href="/seoul-sunset" className={styles.primaryBtn}>
            Seoul Sunset
          </Link>
          <Link href="/pure-night" className={styles.primaryBtn}>
            Seoul Pure Night
          </Link>
        </div>

        <div className={styles.metaRow}>
          <Link href="/order" className={styles.metaLink}>
            Перед замовленням — прочитати
          </Link>
          <span className={styles.dot}>•</span>
          <Link href="/about" className={styles.metaLink}>
            Про Seoul memo
          </Link>
        </div>
      </div>
    </main>
  );
}
