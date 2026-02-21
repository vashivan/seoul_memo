// app/box/[slug]/page.tsx
import { notFound } from "next/navigation";
import BoxPage from "@/components/BoxPage";
import { getBoxBySlug } from "@/lib/boxes";

export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) return notFound();

  const box = await getBoxBySlug(slug);
  if (!box) return notFound();

  return <BoxPage box={box} />;
}