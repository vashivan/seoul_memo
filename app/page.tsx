import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "../styles/HomeCommercial.module.scss";
import { getBoxBySlug } from "@/lib/boxes";
import { YouTubeBackground } from "@/components/YouTubeBackground";

export default async function Page() {
  const box = await getBoxBySlug("seoul-pure-night-routine")
  if (!box) return notFound();

  return (
    <main className={styles.main}>
      {/* background layers */}
      <div className={styles.bg}>
        <YouTubeBackground videoId={box.video} />
      </div>
      <div className={styles.overlay} />

      {/* content */}
      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.kicker}>Seoul memo</div>

            <h1 className={styles.h1}>{box.name}.box</h1>

            <p className={styles.sub}>
              {box.description}
              <br />
              Зібрано вручну. Доставка в Україну 7–14 днів.
            </p>

            <div className={styles.badges}>
              <span className={styles.badge}>-Куплено офлайн в Сеулі-</span>
              <span className={styles.badge}>-Обмежена кількість-</span>
              <span className={styles.badge}>-Відправка поштою-</span>
            </div>

            <div className={styles.actions}>
              <Link href={`/box/${box.slug}`} className={styles.primaryBtn}>
                Замовити зараз
              </Link>

              <Link href="#inside" className={styles.secondaryBtn}>
                Що всередині
              </Link>

              <Link href="/boxes" className={styles.secondaryBtn}>
                Інші бокси
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section id="inside" className={styles.inside}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Що входить у бокс</h2>
            <p className={styles.sectionSub}>Кожен елемент — частина сцени. Нічого випадкового.</p>
          </div>

          <ul className={styles.itemsGrid}>
            {box.items.map((item, index) => (
              <li className={styles.itemCard} key={`${item.name}-${index}`}>
                <div className={styles.itemTop}>
                  <p className={styles.itemName}>{item.name}</p>
                  {item.imageUrl ? (
                    <div className={styles.itemImageWrap}>
                      <Image
                        src={item.imageUrl}
                        alt={item.imageAlt || item.name}
                        fill
                        sizes="(max-width: 768px) 90vw, 320px"
                        className={styles.itemImage}
                      />
                    </div>
                  ) : null}
                </div>

                <p className={styles.itemDesc}>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* TRUST */}
        <section className={styles.trust}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Чому це не просто сувенір?</h2>
          </div>

          <div className={styles.trustBox}>
            <p className={styles.trustText}>
              Я живу в Сеулі та особисто купую кожну річ офлайн — в Olive Young, локальних магазинах і невеликих просторах. Намагаючись відшукати саме корейські автентичні бренди, щоб познайомити людей з ними.
              Це не масмаркет і не random набір. Це curated-настрій, зібраний руками.
            </p>

            <div className={styles.trustMini}>
              {/* <div className={styles.trustPill}>Оплата перед відправкою</div>
              <div className={styles.trustPill}>Трек-номер після відправки</div>
              <div className={styles.trustPill}>Пакування як подарунок</div> */}
              <div className={styles.trustPill}>
                <Link href="/about" target="_blank">
                  Про проєкт Seoul Memo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HOW */}
        <section className={styles.how}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Як відбувається замовлення</h2>
          </div>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepText}>Оформлюєш замовлення</div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepText}>Я збираю бокс у Сеулі</div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepText}>Відправляю в Україну</div>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>4</div>
              <div className={styles.stepText}>Ти отримуєш атмосферу</div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.final}>
          <h2 className={styles.finalTitle}>Наступна відправка — 15 березня</h2>
          <p className={styles.finalSub}>Pre-order до 5 березня</p>

          <Link href={`/box/${box.slug}`} className={styles.primaryBtnLarge}>
            Замовити {box.name}.box — 2300 ₴
          </Link>
          <Link href="/boxes" className={styles.secondaryBtnLarge}>
            Подивитися інші бокси
          </Link>
        </section>
      </div>
    </main>
  );
}