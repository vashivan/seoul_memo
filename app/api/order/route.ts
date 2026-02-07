import { NextResponse } from "next/server";

type GlossShade =
  | "01 Soft Fig"
  | "02 Juicy Berry"
  | "03 Peach Squeeze"
  | "04 Rare Plum";

type MistScent =
  | "White Dazzle"
  | "Sunlit Apple"
  | "Pale Peony"
  | "Osmanthus Blanc";

type OrderPayload = {
  gloss: GlossShade;
  mist: MistScent;
  contact: string;
  location?: string;
  note?: string;

  // fixed items (optional, but you already have them)
  cream?: "fixed";
  bag?: "fixed";
  combucha?: "fixed";
};

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(req: Request) {
  try {
    const token = "8300127997:AAGU94GdYiYiLle2lNF33ymKgW4_weJsfZo";
    const chatId = "422023261";

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as Partial<OrderPayload>;

    // minimal validation
    if (!body.contact || body.contact.trim().length < 3) {
      return NextResponse.json(
        { error: "Contact is required" },
        { status: 400 }
      );
    }
    if (!body.gloss || !body.mist) {
      return NextResponse.json(
        { error: "Gloss and mist are required" },
        { status: 400 }
      );
    }

    const now = new Date().toLocaleString("uk-UA", { timeZone: "Asia/Seoul" });

    const msg =
      `<b>Seoul sunset — new order</b>\n` +
      `<i>${escapeHtml(now)}</i>\n\n` +
      `<b>Gloss:</b> ${escapeHtml(body.gloss)}\n` +
      `<b>Mist:</b> ${escapeHtml(body.mist)}\n` +
      `<b>Included:</b> hand cream, bag, kombucha\n\n` +
      `<b>Contact:</b> ${escapeHtml(body.contact)}\n` +
      `<b>Location:</b> ${escapeHtml(body.location?.trim() || "—")}\n` +
      `<b>Note:</b> ${escapeHtml(body.note?.trim() || "—")}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const tgRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // parse_mode HTML so we can bold nicely
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
  } catch (e: any) {
    return NextResponse.json(
      { error: "Server error", details: e?.message ?? String(e) },
      { status: 500 }
    );
  }
}
