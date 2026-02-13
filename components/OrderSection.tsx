"use client";

import { useMemo, useState } from "react";
import { OrderInfoAccordion } from "./Accordeon";
import OrderBlock from "./OrderBlock";
import type { Box } from "../utils/types";

export function OrderSection({ box }: { box: Box }) {
  // selected[itemId] = variantName
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const summary = useMemo(() => {
    return box.items.map((it) => ({
      itemId: it.id,
      itemName: it.name,
      selectedVariant: selected[it.id] ?? null,
    }));
  }, [box.items, selected]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (contact.trim().length < 3) {
      setError("Залиш контакт (Instagram / телефон / Telegram), щоб ми могли підтвердити замовлення.");
      setLoading(false);
      return;
    }

    // (опційно) валідація: всі items з variants мають бути обрані
    const missing = box.items
      .filter((it) => it.variants.length > 0)
      .filter((it) => !selected[it.id]);

    if (missing.length) {
      setError(`Обери варіант для: ${missing.map((m) => m.name).join(", ")}.`);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          boxName: box.name,
          selections: summary,
          contact,
          location,
          note,
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
    } catch {
      setError("Мережевий збій. Спробуй ще раз.");
      setLoading(false);
    }
  };

  return (
    <section id="order" className="orderWrap">
      <div className="orderHead">
        <p className="kicker">Seoul memo / order</p>
        <h3 className="orderTitle">Обери деталі вечора</h3>
      </div>

      <form className="orderForm" onSubmit={onSubmit}>
        {box.items.map((item) => (
          <OrderBlock
            key={item.id}
            item={item}
            value={selected[item.id] ?? ""}
            onChange={(variantName) =>
              setSelected((prev) => ({ ...prev, [item.id]: variantName }))
            }
          />
        ))}

        <OrderInfoAccordion boxPrice="від 2600 грн." />

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

          <button className="submit" type="submit" disabled={loading}>
            {loading ? "Надсилаємо..." : "Надіслати заявку"}
          </button>

          {sent && <div className="success">Заявку отримали. Напишемо тобі для підтвердження ✦</div>}
        </div>
      </form>
    </section>
  );
}
