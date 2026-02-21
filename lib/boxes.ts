import { prisma } from "@/lib/prisma";
import type { Box } from "@/utils/types";

export async function getBoxBySlug(slug: string): Promise<Box | null> {
  const dbBox = await prisma.box.findUnique({
    where: { slug },
    include: {
      storySlides: {
        orderBy: { order: "asc" },
        include: { lines: { orderBy: { order: "asc" } } },
      },
      items: {
        orderBy: { order: "asc" },
        include: { variants: { orderBy: { order: "asc" } } },
      },
    },
  });

  if (!dbBox) return null;

  // ⬇️ мапимо під твій фронтовий тип Box
  return {
    id: dbBox.id,
    slug: dbBox.slug,
    video: dbBox.video,
    name: dbBox.name,
    boxPrice: dbBox.boxPrice,
    description: dbBox.description,
    story: dbBox.storySlides.map((s) => ({
      kicker: s.kicker ?? undefined,
      title: s.title ?? undefined,
      lines: s.lines.map((l) => l.text),
    })),
    items: dbBox.items.map((it) => ({
      id: it.id,
      name: it.name,
      description: it.description,
      link: it.link ?? "#",
      imageUrl: it.imageUrl ?? "",
      imageAlt: it.imageAlt ?? "",
      variants: it.variants.map((v) => ({
        name: v.name,
        description: v.description ?? "",
      })),
    })),
  };
}