"use client";

import { Box } from "@/utils/types";

export function BoxSection({ box }: { box: Box }) {
    const scrollToBox = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="box">
      <div>
        <h3 className="boxTitle">Що таке {box.name}?</h3>
        <p className="boxText">
          {box.description}
        </p>

        <div className="grid">
          <div className="card">
            <h4>Всередині</h4>
            <ul>
              {box.items.map((item) => (
                <li key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
            <p className="muted">Склад може трохи змінюватися за бажанням. <br/> Настрій — ні.</p>
          </div>

          <div className="card">
            <h4>Як замовити</h4>
            <ol>
              <li>Залишаєш заявку</li>
              <li>Ми підтверджуємо</li>
              <li>Формуємо бокс у Сеулі</li>
              <li>Відправляємо</li>
            </ol>

            <p>Для замволення напиши нам <a className="ctaLink underline" href="https://instagram.com/seoul.memo" target="_blank" rel="noreferrer">
              в Instagram
            </a> <br/> або просто замов зараз</p>

            <button className="cta"
            onClick={scrollToBox}>
              Замовити зараз
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
