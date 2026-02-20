import { NextResponse } from "next/server";

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
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

    const body = await req.json().catch(() => null);

    const name = (body?.name ?? "").toString().trim();
    const contact = (body?.contact ?? "").toString().trim();
    const message = (body?.message ?? "").toString().trim();
    const source = (body?.source ?? "unknown").toString().trim();
    const pageUrl = (body?.pageUrl ?? "").toString().trim();

    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, contact, message" },
        { status: 400 }
      );
    }

    const ua = req.headers.get("user-agent") ?? "";
    const referer = req.headers.get("referer") ?? "";

    const text =
      `<b>Seoul.memo — New request</b>\n\n` +
      `<b>Name:</b> ${escapeHtml(name)}\n` +
      `<b>Contact:</b> ${escapeHtml(contact)}\n` +
      `<b>Message:</b>\n${escapeHtml(message)}\n\n` +
      `<b>Source:</b> ${escapeHtml(source)}\n` +
      (pageUrl ? `<b>Page:</b> ${escapeHtml(pageUrl)}\n` : "") +
      (referer ? `<b>Referer:</b> ${escapeHtml(referer)}\n` : "") +
      (ua ? `<b>UA:</b> ${escapeHtml(ua)}\n` : "");

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!tgRes.ok) {
      const errText = await tgRes.text().catch(() => "");
      return NextResponse.json(
        { error: "Telegram API error", details: errText },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}