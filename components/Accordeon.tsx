"use client";

import { useId, useMemo, useState } from "react";
import styles from "../styles/Accordeon.module.scss";

type Props = {
  boxPrice?: number | string;
  triggerLabel?: string;
};

type ItemKey = "price" | "delivery" | "custom" | "special" | "how";

export function OrderInfoAccordion({
  boxPrice,
  triggerLabel = "Перед замовленням — прочитати",
}: Props) {
  const uid = useId();
  const panelId = useMemo(() => `order-info-${uid}`, [uid]);

  const [isOpen, setIsOpen] = useState(false);
  const [openKey, setOpenKey] = useState<ItemKey | null>(null);

  const openAndScroll = () => {
    setIsOpen(true);
    setOpenKey("price");
    requestAnimationFrame(() => {
      document.getElementById(panelId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const togglePanel = () => {
    setIsOpen((v) => !v);
    if (!isOpen) setOpenKey("price");
  };

  const items: Array<{
    key: ItemKey;
    title: string;
    content: React.ReactNode;
  }> = [
    {
      key: "price",
      title: "Вартість боксу",
      content: (
        <>
          <p>
            Базова ціна боксу — <strong>{boxPrice}</strong>.
          </p>
          <p className={styles.muted}>
            Фінальна вартість залежить від наповнення та можливих змін.
          </p>
        </>
      ),
    },
    {
      key: "delivery",
      title: "Доставка",
      content: (
        <>
          <p>Відправлення з Південної Кореї. Доставка не входить у ціну боксу.</p>
          <p className={styles.muted}>
            Ціна залежить від країни, типу поштового відправлення, ваги та габаритів.
            Ми підбираємо оптимальний варіант і узгоджуємо перед відправкою.
          </p>
        </>
      ),
    },
    {
      key: "custom",
      title: "Кастомізація",
      content: (
        <>
          <p>Можна адаптувати бокс під вас:</p>
          <ul className={styles.list}>
            <li>прибрати деталь</li>
            <li>замінити елемент</li>
            <li>додати щось додаткове</li>
            <li>зібрати інший формат боксу</li>
          </ul>
          <p className={styles.muted}>
            Якщо щось змінюємо — ціна може коригуватись. Ми завжди попереджаємо заздалегідь.
          </p>
        </>
      ),
    },
    {
      key: "special",
      title: "Індивідуальні запити",
      content: (
        <p className={styles.muted}>
          Хочете інший настрій, особливий подарунок або конкретні речі з Кореї — опишіть це у формі.
          Ми підкажемо можливі варіанти.
        </p>
      ),
    },
    {
      key: "how",
      title: "Як відбувається замовлення",
      content: (
        <ol className={styles.olist}>
          <li>Заповнюєте форму</li>
          <li>Ми уточнюємо деталі та доставку</li>
          <li>Погоджуємо фінальну вартість</li>
          <li>Збираємо та відправляємо бокс</li>
        </ol>
      ),
    },
  ];

  return (
    <section className={styles.wrap}>
      {/* Link-trigger row */}
      <div className={styles.triggerRow}>
        <button
          type="button"
          onClick={openAndScroll}
          className={styles.triggerLink}
          aria-controls={panelId}
          aria-expanded={isOpen}
        >
          {triggerLabel}
        </button>

        <span className={styles.sep}>/</span>

        <button
          type="button"
          onClick={togglePanel}
          className={styles.triggerBtn}
          aria-controls={panelId}
          aria-expanded={isOpen}
        >
          {isOpen ? "закрити" : "відкрити"}
        </button>
      </div>

      {/* Panel */}
      <div
        id={panelId}
        className={`${styles.panel} ${isOpen ? styles.panelOpen : styles.panelClosed}`}
      >
        <div className={styles.panelInner}>
          <div className={styles.header}>
            <h2 className={styles.title}>Інструкції щодо замовлення</h2>
            <p className={styles.subtitle}>Коротко й по суті — щоб усе було прозоро.</p>
          </div>

          <div className={styles.items}>
            {items.map((it) => {
              const opened = openKey === it.key;
              return (
                <div key={it.key} className={styles.item}>
                  <button
                    type="button"
                    className={styles.itemBtn}
                    onClick={() => setOpenKey(opened ? null : it.key)}
                    aria-expanded={opened}
                  >
                    <span className={styles.itemTitle}>{it.title}</span>
                    <span className={`${styles.plus} ${opened ? styles.plusOpen : ""}`} aria-hidden>
                      +
                    </span>
                  </button>

                  <div className={`${styles.content} ${opened ? styles.contentOpen : ""}`}>
                    <div className={styles.contentInner}>{it.content}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.footer}>
            Seoul memo — це не “просто товар”. Це зібрана атмосфера, з увагою до деталей.
          </div>
        </div>
      </div>
    </section>
  );
}
