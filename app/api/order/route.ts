import { NextResponse } from "next/server";

type OrderPayload = {
  boxName: string;
  selections: Array<{
    itemId: string; // <-- краще string
    itemName: string;
    selectedVariant: string | null;
  }>;
  contact: string;
  location?: string;
  note?: string;
};

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/order" });
}

export async function POST(req: Request) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" },
        { status: 500 }
      );
    }

    const bodyUnknown: unknown = await req.json();
    const body = bodyUnknown as Partial<OrderPayload>;

    if (!body.boxName || body.boxName.trim().length < 1) {
      return NextResponse.json({ error: "boxName is required" }, { status: 400 });
    }

    if (!body.contact || body.contact.trim().length < 3) {
      return NextResponse.json({ error: "Contact is required" }, { status: 400 });
    }

    if (!body.selections || !Array.isArray(body.selections)) {
      return NextResponse.json({ error: "Selections are required" }, { status: 400 });
    }

    const now = new Date().toLocaleString("uk-UA", { timeZone: "Asia/Seoul" });

    const optionsLines =
      body.selections.length > 0
        ? body.selections
            .map((it) => {
              const name = escapeHtml(it.itemName ?? "—");
              const variant = it.selectedVariant ? escapeHtml(it.selectedVariant) : "—";
              return `• ${name}: <b>${variant}</b>`;
            })
            .join("\n")
        : "—";

    const msg =
      `<b>${escapeHtml(body.boxName)} — new order</b>\n` +
      `<i>${escapeHtml(now)}</i>\n\n` +
      `<b>Options</b>\n${optionsLines}\n\n` +
      `<b>Contact:</b> ${escapeHtml(body.contact)}\n` +
      `<b>Location:</b> ${escapeHtml(body.location?.trim() || "—")}\n` +
      `<b>Note:</b> ${escapeHtml(body.note?.trim() || "—")}`;

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: msg,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      return NextResponse.json(
        { error: "Telegram send failed", details: errText },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: "Server error", details: message }, { status: 500 });
  }
}
