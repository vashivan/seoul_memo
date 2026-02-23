import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { boxes } from "../data/boxes";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("Missing DATABASE_URL in .env.local");

const prisma = new PrismaClient({
  adapter: new PrismaNeon({ connectionString }),
});

// якщо в Box є `slug` — краще додай вручну.
// якщо нема — згенеруємо зі `name`.
function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function main() {
  // DEV-режим: очищаємо, щоб не дублювало
  await prisma.itemVariant.deleteMany();
  await prisma.boxItem.deleteMany();
  await prisma.storyLine.deleteMany();
  await prisma.storySlide.deleteMany();
  await prisma.box.deleteMany();

  for (const box of boxes as any[]) {
    const slug = box.slug ?? slugify(box.name);

    await prisma.box.create({
      data: {
        slug,
        video: box.video,
        name: box.name,
        boxImg: box.boxImg,
        boxPrice: box.boxPrice,
        description: box.description,

        storySlides: {
          create: box.story.map((slide: any, slideIdx: number) => ({
            order: slideIdx + 1,
            kicker: slide.kicker ?? null,
            title: slide.title ?? null,
            lines: {
              create: (slide.lines ?? []).map((text: string, lineIdx: number) => ({
                order: lineIdx + 1,
                text,
              })),
            },
          })),
        },

        items: {
          create: box.items.map((it: any, itemIdx: number) => ({
            order: itemIdx + 1,
            name: it.name,
            description: it.description,
            link: it.link ?? null,
            imageUrl: it.imageUrl ?? null,
            imageAlt: it.imageAlt ?? null,
            variants: {
              create: (it.variants ?? []).map((v: any, vIdx: number) => ({
                order: vIdx + 1,
                name: v.name,
                description: v.description ?? null,
              })),
            },
          })),
        },
      },
    });
  }
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });