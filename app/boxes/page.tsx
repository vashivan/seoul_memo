import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import styles from "../../styles/BoxesList.module.scss";
import Footer from "@/components/Footer";

export default async function Page() {
  const boxes = await prisma.box.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      items: true,
    },
  });

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Seoul memo boxes</h1>

        <div className={styles.grid}>
          {boxes.map((box) => (
            <div key={box.slug} className={styles.card}>
              
              {box.items[0]?.imageUrl && (
                <div className={styles.imageWrap}>
                  <Image
                    src={box.boxImg || ""}
                    alt={box.name}
                    fill
                    className={styles.image}
                  />
                </div>
              )}

              <div className={styles.cardContent}>
                <h2>{box.name}</h2>
                <p>{box.description}</p>

                <Link href={`/box/${box.slug}`} className={styles.button}>
                  Переглянути бокс
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}