import { YouTubeBackground } from "@/components/YouTubeBackground";
import { Story } from "@/components/Story";
import { BoxSection } from "@/components/BoxSection";
import { OrderSection } from "@/components/OrderSection";

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
