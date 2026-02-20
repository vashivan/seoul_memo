'use client'

import Link from "next/link";
import styles from "../styles/AboutPage.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: (formData.get("name")?.toString().trim()) || "",
      contact: (formData.get("contact")?.toString().trim()) || "",
      message: (formData.get("message")?.toString().trim()) || "",
      source: (formData.get("source") ?? "about").toString(),
      pageUrl: window.location.href,
    };
    setLoading(true);

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      form.reset();
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.kicker}>Seoul memo</div>
        <div className={styles.topLinks}>
          <Link href="/" className={styles.link}>На головну</Link>
          <span className={styles.dot}>•</span>
          <Link href="/order" className={styles.link}>Перед замовленням — прочитати</Link>
          <span className={styles.dot}>•</span>
          <Link href="/seoul-sunset" className={styles.link}>Seoul Sunset</Link>
        </div>
        <h1 className={styles.h1}>Seoul.memo — curated box experience from Seoul.</h1>
        <p className={styles.p}>
          Ми не “продаємо речі”.
          <br />
          Ми збираємо не речі.
          <br />
          Ми збираємо атмосферу міста.
        </p>
      </header>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2 className={styles.h2}>Що це</h2>
          <p className={styles.text}>
            Seoul.memo — це бренд curated box experience, створений у Сеулі.
            Ми досліджуємо місто через деталі: світло вітрин, тишу метро, нічні ритуали, корейський побут.
            Кожен бокс — це зібраний настрій.
            Не просто косметика чи предмети, а завершений досвід.
          </p>
          <Image src="/what-is-seoul-memo.jpg" alt="Що таке Seoul.memo" width={600} height={400} />
        </article>

        <article className={styles.card}>
          <h2 className={styles.h2}>Як ми збираємо</h2>
          <p className={styles.text}>
            Мене звати <Link className="underline" href="https://www.instagram.com/vash_ivan/">Іван (Instagram)</Link> живу в Сеулі і з часом зрозумів — це місто чіпляє навіть тих, хто тут ніколи не був.
            У ньому є ритм, який складно пояснити словами.
            Тому я почав збирати його через деталі — і ділитися цим відчуттям.
            <br />
            Ми відбираємо речі так, ніби збираємо маленьку історію:
            що відчуваєш на шкірі, що хочеш поставити на полицю, що хочеш взяти з собою.
            Часто — мінімально, але точно.
            <br />
            Кожен бокс зібраний особисто.
            Речі купуються в Сеулі — офлайн, в конкретних місцях, з конкретною історією.
            Ми не працюємо як масовий магазин.
            Кількість обмежена.
          </p>
          <Image className={styles.image} src="/IMG_1051.jpg" alt="Як ми збираємо" width={600} height={400} />
        </article>

        <article className={styles.card}>
          <h2 className={styles.h2}>Для кого</h2>
          <ul className={styles.list}>
            <li>для тих, хто був у Сеулі й сумує за ним</li>
            <li>для тих, хто мріє відчути місто до поїздки</li>
            <li>для подарунка: “ось твій Сеул”</li>
            <li>для себе: як мемо на тиждень/місяць</li>
          </ul>
          <Image src="/for-who.jpg" alt="Для кого Seoul.memo" width={600} height={400} />
        </article>

        <article className={styles.card}>
          <h2 className={styles.h2}>Гнучкий формат</h2>
          <p className={styles.text}>
            Бокс можна адаптувати: прибрати/замінити/додати деталі або зібрати зовсім інший.
            Ми завжди погоджуємо фінальну вартість перед відправленням.
            <br />
            <strong>Seoul.memo — це не набір продуктів.</strong>
            <br />
            Це вечір.
            <br />
            Це ритуал.
            <br />
            Це спосіб на мить опинитися в іншому місті.
          </p>
          <Image src="/box-adaptation.jpg" alt="Гнучкий формат" width={600} height={400} />
        </article>
      </section>

      <section className={`${styles.cta}`}>
        <div className={styles.ctaInner}>
          <div>
            <h2 className={styles.h3}>Якщо бажаєш більше</h2>
            <p className={styles.ctaText}>
              Ми завжди готові вислухати твої побажання та ідеї, знайти бажану річ в Сеулі та відправити тобі.
              Просто зв`яжись із нами через <Link className="underline" href="https://www.instagram.com/seoul.memo/">Instagram</Link> і ми обговоримо деталі.
              <br />
              Або заповни форму знизу, і ми зв’яжемося з тобою.
            </p>
            <form id="form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
              <input className="p-3 border border-white text-white" name="name" type="text" placeholder="Твое ім'я" />
              <input className="p-3 border border-white text-white" name="contact" type="text" placeholder="номер телефону/email/instagram/telegram " />
              <textarea className="p-3 border border-white text-white" name="message" placeholder="Твое повідомлення" />
              <button
                className="p-3 border border-white text-white cursor-pointer hover:text-black hover:bg-white transition-all duration-300"
                type="submit">
                {loading ? "Відправляємо..." : "Відправити"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div>
            <h3 className={styles.h3}>Хочеш свій перший Seoul memo?</h3>
            <p className={styles.ctaText}>
              Почни з Seoul Sunset.
            </p>
          </div>

          <div className={styles.ctaButtons}>
            <Link href="/seoul-sunset" className={styles.primaryBtn}>
              Seoul Sunset
            </Link>
          </div>
        </div>
      </section> */}

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Міста залишаються в деталях. Ми збираємо їх в одне ціле — для вас.
        </p>
      </footer>
    </main>
  );
}
