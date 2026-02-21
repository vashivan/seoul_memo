import Footer from "@/components/Footer";
import { OrderSection } from "@/components/OrderSection";
import { Story } from "@/components/Story";
import { YouTubeBackground } from "@/components/YouTubeBackground"
import { getBoxBySlug } from "@/lib/boxes";
import { Box } from "@/utils/types";
import { notFound } from "next/navigation";


export default async function BoxPage ({ box }: { box: Box }) {
  const memoBox = await getBoxBySlug(box.slug);
  if (!memoBox) return notFound();

  return (
    <main>
      <YouTubeBackground videoId={memoBox.video} />

      <Story box={memoBox} />

      <section className="boxWrap">
        <div className="boxInner">
          {/* <BoxSection box={box} /> */}
          <OrderSection box={memoBox} />
        </div>
        <Footer />
      </section>
    </main>
  )
};