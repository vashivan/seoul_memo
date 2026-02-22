import Link from "next/link";
import styles from "../styles/HomeCommercial.module.scss";
import { getBoxBySlug } from "@/lib/boxes";
import { notFound } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { YouTubeBackground } from "./YouTubeBackground";

export default async function HomePage() {
  const boxes = await prisma.box.findMany({
    select: {
      slug: true
    }
});

const randomBox = boxes[Math.floor(Math.random() * boxes.length)]

  const box = await getBoxBySlug(randomBox.slug);
  if (!box) return notFound();

  return (
    <main>
      <YouTubeBackground videoId={box.video} />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <div className={styles.kicker}>Seoul memo</div>

          <h1 className={styles.h1}>
            {box.name}.box
          </h1>

          <p className={styles.sub}>
            {box.description}
            Зібрано вручну. Доставка в Україну 7–14 днів.
          </p>

          <div className={styles.badges}>
            <span>✔ Куплено офлайн в Сеулі</span>
            <span>✔ Обмежена кількість</span>
            <span>✔ Відправка Новою Поштою</span>
          </div>

          <div className={styles.actions}>
            <Link href={`/box/${box.slug}`} className={styles.primaryBtn}>
              Замовити зараз
            </Link>
          </div>

          <div className={styles.stock}>
            Залишилось 18 боксів
          </div>
        </div>

        {/* <div className={styles.heroImage}>
          <Image
            src="/sunset-box.jpg"
            alt="Seoul Sunset Box"
            width={520}
            height={520}
            priority
          />
        </div> */}
      </section>


      {/* WHAT'S INSIDE */}
      <section className={styles.inside}>
        <h2>Що входить у бокс</h2>

        <div className={styles.grid}>
          <ul>
            {box.items.map((item, index) =>
              <li className="mb-8 flex flex-col items-center" key={index}>
                <p className="text-xl mb-4">{item.name}</p>
                <p>{item.description}</p>
                <Image src={item.imageUrl} alt={item.imageAlt} width={200} height={300} />
              </li>
            )}
          </ul>
        </div>
      </section>


      {/* WHY TRUST */}
      <section className={styles.trust}>
        <h2>Чому це не просто сувенір?</h2>
        <p>
          Я живу в Сеулі та особисто купую кожну річ офлайн —
          в Olive Young, локальних магазинах та невеликих просторах.
          Це не масмаркет і не random набір.
        </p>
      </section>


      {/* HOW IT WORKS */}
      <section className={styles.how}>
        <h2>Як відбувається замовлення</h2>

        <div className={styles.steps}>
          <div>1. Оформлюєш замовлення</div>
          <div>2. Я збираю бокс у Сеулі</div>
          <div>3. Відправляю в Україну</div>
          <div>4. Ти отримуєш атмосферу</div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className={styles.final}>
        <h2>Наступна відправка — 15 березня</h2>
        <p>Pre-order до 5 березня</p>

        <Link href={`/box/${box.slug}`} className={styles.primaryBtnLarge}>
          Замовити {box.name}.box — 2300 ₴
        </Link>

        <Link href="/boxes" className={styles.secondaryBtnLarge}>
         
        </Link>
      </section>

    </main>
  );
}