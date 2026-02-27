"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/MoodGate.module.scss";
import type { Box } from "@/utils/types";

export default function MoodGate({ allBoxes }: { allBoxes: Box[] }) {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  // activeSection: 0 = intro, 1..N = boxes
  const [activeSection, setActiveSection] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const activeBox =
    activeSection > 0 ? allBoxes[activeSection - 1] : allBoxes[0];

  const scrollToIndex = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const go = async (box: Box) => {
    if (loadingId) return;
    setLoadingId(String(box.id));
    await new Promise((r) => setTimeout(r, 380));
    router.push(`/mood/${box.slug}`); // або `/box/${box.slug}` якщо так у тебе
  };

  // IntersectionObserver для визначення активного екрану
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (!visible) return;

        const idx = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(idx)) setActiveSection(idx);
      },
      { root, threshold: [0.65] }
    );

    sectionRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [allBoxes.length]);

  // total sections = intro + boxes
  const totalSections = 1 + allBoxes.length;

  return (
    <main className={styles.page}>
      {/* Dots */}
      <nav className={styles.dots} aria-label="Навігація">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${i === activeSection ? styles.dotActive : ""}`}
            onClick={() => scrollToIndex(i)}
            aria-label={i === 0 ? "Intro" : `Бокс ${i}`}
          />
        ))}
      </nav>

      {/* Scroll container */}
      <div className={styles.snap} ref={containerRef}>
        {/* Intro */}
        <section
          className={`${styles.section} ${styles.intro}`}
          data-index={0}
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
        >
          <div className={styles.introBg} />
          <div className={styles.overlay} />

          <div className={styles.introInner}>
            <div className={styles.brand}>SEOUL MEMO</div>

            <h1 className={styles.h1}>
              Сеул це не про місто.
              <br />
              Це про відчуття.
            </h1>

            <p className={styles.sub}>
              Який Сеул ти хочеш <span className={styles.dim}>сьогодні</span>?
            </p>

            <div className={styles.introActions}>
              <button
                type="button"
                className={styles.primary}
                onClick={() => scrollToIndex(1)}
              >
                Обрати
              </button>

              {allBoxes?.length ? (
                <button
                  type="button"
                  className={styles.secondary}
                  onClick={() => go(allBoxes[0])}
                >
                  Відкрити перший mood 
                </button>
              ) : null}
            </div>

            <div className={styles.footer}>
              <span>Зібрано в Сеулі</span>
              <span className={styles.sep}>•</span>
              <span>Відправлено до вас</span>
            </div>
          </div>
        </section>

        {/* Reels (boxes) */}
        {allBoxes.map((box, i) => {
          const idx = i + 1; // бо 0 — intro
          // const isLast = i === allBoxes.length - 1;

          return (
            <section
              key={box.slug}
              className={styles.section}
              data-index={idx}
              ref={(el) => {
                sectionRefs.current[idx] = el;
              }}
            >
              {/* background image */}
              <div
                className={styles.bgImage}
                style={{ backgroundImage: `url(${box.boxImg})` }}
                aria-hidden="true"
              />

              <div className={styles.overlay} />

              {/* content */}
              <div className={styles.ui}>
                <div className={styles.kicker}>
                  Seoul memo / mood {String(i + 1).padStart(2, "0")} of{" "}
                  {String(allBoxes.length).padStart(2, "0")}
                </div>

                <h2 className={styles.title}>{box.name}</h2>

                <p className={styles.desc}>
                  {box.description?.trim()
                    ? box.description
                    : "Атмосфера, зібрана в Сеулі. Коротка історія в деталях."}
                </p>

                <div className={styles.bottomRow}>
                  <div className={styles.price}>
                    {box.boxPrice ? `${box.boxPrice} ₴` : "—"}
                  </div>

                  <button
                    type="button"
                    className={styles.primary}
                    onClick={() => go(box)}
                    disabled={Boolean(loadingId)}
                  >
                    Обрати →
                  </button>
                </div>

                {/* <div className={styles.hint}>
                  {isLast ? "Кінець. Гортай вгору або обери інший." : "Гортай вниз"}
                </div> */}
              </div>
            </section>
          );
        })}
      </div>

      {/* Fade overlay on navigation */}
      <div className={`${styles.fade} ${loadingId ? styles.fadeOn : ""}`}>
        <div className={styles.fadeText}>
          {activeBox ? `Відкриваю: ${activeBox.name}` : "…"}
        </div>
      </div>
    </main>
  );
}