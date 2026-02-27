import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import MoodGate from "@/components/MoodGate";
import type { ReelBox } from "@/components/MoodGate";

export default async function Page() {
  const boxesRaw = await prisma.box.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      slug: true,
      name: true,
      description: true,
      boxPrice: true,
      boxImg: true,
    },
  });

  if (!boxesRaw.length) return notFound();

  const boxes: ReelBox[] = boxesRaw.map((b) => ({
    id: b.id,
    slug: b.slug,
    name: b.name,
    description: b.description,
    boxPrice: b.boxPrice,
    boxImg: b.boxImg ?? "/images/mood-default.jpg", // зроби файл або постав ""
  }));

  return <MoodGate allBoxes={boxes} />;
}