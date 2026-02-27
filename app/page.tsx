// import Link from "next/link";
// import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
// import styles from "../styles/HomeCommercial.module.scss";
// import { getBoxBySlug } from "@/lib/boxes";
// import { YouTubeBackground } from "@/components/YouTubeBackground";
import MoodGate from "@/components/MoodGate";

export default async function Page() {
  const boxes = await prisma.box.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        items: true,
      },
    });
  if (!boxes) return notFound();

  return <MoodGate allBoxes={boxes} />
}