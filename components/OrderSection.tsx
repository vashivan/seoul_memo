"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { OrderInfoAccordion } from "./Accordeon";

type GlossShade = "01 Soft Fig" | "02 Juicy Berry" | "03 Peach Squeeze" | "04 Rare Plum";
type MistScent = "White Dazzle" | "Sunlit Apple" | "Pale Peony" | "Osmanthus Blanc";

const GLOSS: { value: GlossShade; sub: string }[] = [
  { value: "01 Soft Fig", sub: "м’який рожевий" },
  { value: "02 Juicy Berry", sub: "ягідний, трохи сміливіший" },
  { value: "03 Peach Squeeze", sub: "теплий персик" },
  { value: "04 Rare Plum", sub: "сливовий нюд" },
];

const MISTS: { value: MistScent; sub: string }[] = [
  { value: "White Dazzle", sub: "чистий квітковий, дуже ніжний" },
  { value: "Sunlit Apple", sub: "легка свіжість, світлий настрій" },
  { value: "Pale Peony", sub: "півонія, м’яко і делікатно" },
  { value: "Osmanthus Blanc", sub: "теплий, чистий, спокійний" },
];

function OptionCard({
  active,
  title,
  sub,
  name,
  checked,
  onChange,
  value,
}: {
  active: boolean;
  title: string;
  sub: string;
  name: string;
  checked: boolean;
  onChange: () => void;
  value: string;
}) {
  return (
    <label className={`optCard ${active ? "active" : ""}`}>
      <input
        className="optRadio"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className="optMeta">
        <div className="optTitle">{title}</div>
        <div className="optSub">{sub}</div>
      </div>
      {/* <div className="optMark" aria-hidden="true" /> */}
    </label>
  );
}

export function OrderSection() {
  const [gloss, setGloss] = useState<GlossShade>("03 Peach Squeeze");
  const [mist, setMist] = useState<MistScent>("White Dazzle");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const summary = useMemo(() => ({ gloss, mist, cream: "fixed" as const, bag: "fixed" as const, combucha: "fixed" as const }), [gloss, mist]);

  const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);
  setLoading(true);

  if (contact.trim().length < 3) {
    setError("Залиш контакт (Instagram / телефон / Telegram), щоб ми могли підтвердити замовлення.");
    setLoading(false);
    return;
  }

  try {
    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gloss,
        mist,
        contact,
        location,
        note,
        cream: "fixed",
        bag: "fixed",
        combucha: "fixed",
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data?.error || "Не вдалося надіслати. Спробуй ще раз.");
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  } catch (err) {
    setError("Мережевий збій. Спробуй ще раз.");
    setLoading(false);
  }
};


  return (
    <section id="order" className="orderWrap">
      <div className="orderHead">
        <p className="kicker">Seoul memo / order</p>
        <h3 className="orderTitle">Обери деталі вечора</h3>
        <p className="orderSub">
          Ти обираєш <strong>відтінок блиску</strong> і <strong>запах body mist</strong>. Крем для рук та сумка — фіксовані.
        </p>
      </div>

      <form className="orderForm" onSubmit={onSubmit}>
        <div className="orderBlock">
          <div className="blockHead">
            <Link href="https://clubclio.co.kr/shop/goodsView/0000006833#page1&id=0000006833" target="_blank">
              <h4 className="underline">CLIO Lip Serum</h4>
            </Link>
          </div>

          <p className="blockNote">Маленька деталь, яка змінює настрій.</p>

          <div className="blockMedia">
            <Image
              src="/lip_gloss.JPG"
              alt="Lip gloss shades"
              fill
              sizes="(max-width: 860px) 92vw, 980px"
              priority={false}
            />
            <div className="blockMediaFade" />
            <div className="blockMediaLabel">Shades / palette</div>
          </div>

          <div className="optGrid">
            {GLOSS.map((g) => (
              <OptionCard
                key={g.value}
                active={gloss === g.value}
                title={g.value}
                sub={g.sub}
                name="gloss"
                value={g.value}
                checked={gloss === g.value}
                onChange={() => setGloss(g.value)}
              />
            ))}
          </div>
        </div>

        <div className="orderBlock">
          <div className="blockHead">
            <Link href="https://global.oliveyoung.com/display/page/brand-page?brandNo=B00121&srsltid=AfmBOorvwM4agTaOjz2xtJldcucI_QYAqwvfYiWaa1ceIXxAk9zEmBTw" target="_blank">
              <h4 className="underline">Round Around body/hair mist</h4>
            </Link>

          </div>

          <p className="blockNote">Запах — це пам’ять, яка працює швидше за слова.</p>

          <div className="blockMedia">
            <Image
              src="/round_around.JPG"
              alt="Lip gloss shades"
              fill
              sizes="(max-width: 860px) 92vw, 980px"
              priority={false}
            />
            <div className="blockMediaFade" />
            <div className="blockMediaLabel">Mists</div>
          </div>

          <div className="optGrid">
            {MISTS.map((m) => (
              <OptionCard
                key={m.value}
                active={mist === m.value}
                title={m.value}
                sub={m.sub}
                name="mist"
                value={m.value}
                checked={mist === m.value}
                onChange={() => setMist(m.value)}
              />
            ))}
          </div>
        </div>

        <div className="orderBlock">
          <div className="blockHead">
            <Link href="https://global.oliveyoung.com/display/page/brand-page?brandNo=B00617&srsltid=AfmBOoolPgPf5JSoI7-LqlHGYhuSvjXPFJdn3Ej34jRPUbizC62g78gB" target="_blank">
              <h4 className="underline">Type #60 Slow Down hand cream (muguet, musk, vanilla)</h4>
            </Link>
            <span className="pill">included</span>
          </div>

          <p className="blockNote">Крем — як пауза між рухами. Маленька, але потрібна.</p>

          <div className="blockMedia">
            <Image
              src="/hand_cream.jpg"
              alt="Lip gloss shades"
              fill
              sizes="(max-width: 860px) 92vw, 980px"
              priority={false}
            />
            <div className="blockMediaFade" />
            <div className="blockMediaLabel">Hand cream</div>
          </div>

          <div className="includedRow">
            <div className="includedDot" aria-hidden="true" />
            <p className="includedText">Один варіант. Входить у кожен Seoul sunset.</p>
          </div>
        </div>

        <div className="orderBlock">
          <div className="blockHead">
            <Link href="https://avamhome.com/product/detail.html?product_no=2374&cate_no=492&display_group=1#none " target="_blank">
              <h4 className="underline">Тканинна сумка</h4>
            </Link>
            <span className="pill">included</span>
          </div>

          <p className="blockNote">Для дрібниць, які мають значення.</p>

          <div className="blockMedia">
            <Image
              src="/bag.jpg"
              alt="Lip gloss shades"
              fill
              sizes="(max-width: 860px) 92vw, 980px"
              priority={false}
            />
            <div className="blockMediaFade" />
            <div className="blockMediaLabel">Bag</div>
          </div>


          <div className="includedRow">
            <div className="includedDot" aria-hidden="true" />
            <p className="includedText">Один варіант. Входить у кожен Seoul sunset.</p>
          </div>
        </div>

        <div className="orderBlock">
          <div className="blockHead">
            <Link href="https://global.oliveyoung.com/product/detail?prdtNo=GA210001617&srsltid=AfmBOopyqv0sS2TMG8JMNjFF4BZRNXajL-uCvZSG2DiudEkftuBcHXW8" target="_blank">
              <h4 className="underline">Комбуча</h4>
            </Link>
            <span className="pill">included</span>
          </div>

          <p className="blockNote">Для дрібниць, які мають значення.</p>

          <div className="blockMedia">
            <Image
              src="/kombucha.jpg"
              alt="Lip gloss shades"
              fill
              sizes="(max-width: 860px) 92vw, 980px"
              priority={false}
            />
            <div className="blockMediaFade" />
            <div className="blockMediaLabel">Kombucha</div>
          </div>


          <div className="includedRow">
            <div className="includedDot" aria-hidden="true" />
            <p className="includedText">Один варіант. Входить у кожен Seoul sunset.</p>
          </div>
        </div>

        <OrderInfoAccordion boxPrice="від 2600 грн."/>

        <div className="orderBlock contactBlock">
          <div className="blockHead">
            <h4>Контакт для підтвердження</h4>
            <span className="pill">required</span>
          </div>

          <div className="contactGrid">
            <input
              className="input"
              placeholder="@instagram / +380... / @telegram"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <input
              className="input"
              placeholder="Місто / країна (опційно)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <textarea
            className="textarea"
            placeholder="Коментар (опційно): хочу додатковий подарунок / без різких ароматів / додайте смаколик тощо."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          {error && <div className="error">{error}</div>}

          <button className="submit" type="submit">
            {loading ? "Надсилаємо..." : "Надіслати заявку"}
          </button>

          {sent && <div className="success">Заявку отримали. Напишемо тобі для підтвердження ✦</div>}
        </div>
      </form>
    </section>
  );
}
