"use client";

export function BoxSection() {
    const scrollToBox = () => {
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="box">
      <div>
        <h3 className="boxTitle">Що таке Seoul sunset?</h3>
        <p className="boxText">
          Seoul sunset — це curated-бокс із Сеулу. Ми зібрали відчуття вечора в місті — у речах, яких хочеться торкатися та користуватися.
        </p>

        <div className="grid">
          <div className="card">
            <h4>Всередині</h4>
            <ul>
              <li>Крем для рук</li>
              <li>Body/hair mist</li>
              <li>Lip Serum</li>
              <li>Kombucha в стіках</li>
              <li>Тканинна сумка для найнеобхіднішого</li>
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
