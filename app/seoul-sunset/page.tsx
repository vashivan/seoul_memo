import { BoxSection } from "@/components/BoxSection";
import { OrderSection } from "@/components/OrderSection";
import { Story } from "@/components/Story";
import { YouTubeBackground } from "@/components/YouTubeBackground";

export default function Page() {
  return (
    <main>
      <YouTubeBackground videoId="nOSQvWGFzWo" />
      <Story />

      <section className="boxWrap">
        <div className="boxInner">
          <BoxSection />
          <OrderSection />
        </div>
      </section>
    </main>
  );
}