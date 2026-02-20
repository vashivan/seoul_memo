import { YouTubeBackground } from "@/components/YouTubeBackground";
import Link from "next/link";
import styles from "../styles/MainPage.module.scss";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const boxes = await prisma.box.findMany({
    select: {
      id: true,
      slug: true,
      video: true,
      name: true,
      boxPrice: true,
      description: true,
      createdAt: true,
      updatedAt: true
    }
  });

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

        {/* boxes */}
        <section id="boxes" className={styles.boxes}>
          {boxes.map((box, index) => (
            <div key={index}>
              <div className={styles.boxCard} key={box.id}>
                <div className={styles.boxTop}>
                  <div className={styles.boxName}>{box.name}</div>
                  <div className={styles.boxPrice}>{box.boxPrice} ₴</div>
                </div>

                <div className={styles.boxDesc}>
                  {box.description}
                </div>
                <Link href={box.slug} className={styles.cardBtn}>
                  Подивитись бокс →
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* micro CTA */}
        <div className="mt-15">
          <Footer />
        </div>
      </div>
    </main>
  );
}