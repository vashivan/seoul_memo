// import { BoxSection } from "@/components/BoxSection";
import Footer from "@/components/Footer";
import { OrderSection } from "@/components/OrderSection";
import { Story } from "@/components/Story";
import { YouTubeBackground } from "@/components/YouTubeBackground";
import { getBoxBySlug } from "@/lib/boxes";
import { notFound } from "next/navigation";

// (опційно) щоб завжди підтягувало свіже з БД
export const revalidate = 0;
  

export default async function Page() {
  const box = await getBoxBySlug("seoul-sunset");
  if (!box) return notFound();
  return (
    <main>
      <YouTubeBackground videoId={box.video} />
      <Story box={box} />

      <section className="boxWrap">
        <div className="boxInner">
          {/* <BoxSection box={box} /> */}
          <OrderSection box={box} />
        </div>
        <Footer />
      </section>
    </main>
  );
}