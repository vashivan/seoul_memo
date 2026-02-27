import MainForBox from "@/components/MainForBox";
import { getBoxBySlug } from "@/lib/boxes";

import { notFound } from "next/navigation";

export default async function Page({
  params }
  : {
    params: Promise<{ slug: string }>
  }) {
  const { slug } = await params;

  const box = await getBoxBySlug(slug)
  if (!box) notFound();

  return <MainForBox box={box} />
}