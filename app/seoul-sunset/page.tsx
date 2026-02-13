import { BoxSection } from "@/components/BoxSection";
import Footer from "@/components/Footer";
import { OrderSection } from "@/components/OrderSection";
import { Story } from "@/components/Story";
import { YouTubeBackground } from "@/components/YouTubeBackground";
import { Box } from "@/utils/types";

const sunsetBox: Box = {
  id: 1,
  name: "Seoul sunset",
  description: "Seoul sunset — це curated-бокс із Сеулу. Ми зібрали відчуття вечора в місті — у речах, яких хочеться торкатися та користуватися.",
  story: [
    { kicker: "Seoul memo / entry 001",
      title: "Seoul sunset", 
      lines: ["Сеул.", "Ранній вечір.", "Місто ще рухається — але вже не поспішає."]
    },
    { lines: ["Світло стає м’якшим.", "Рух — повільнішим.", "Думки — голоснішими за слова."] },
    { lines: ["Це та мить, яку ніхто не планує.", "Вона просто трапляється."] },
    { lines: ["Деякі міста кричать.", "Сеул — шепоче.", "Особливо під вечір."] },
    { title: "Ми зберегли це", lines: ["Не як фото.", "Не як сувенір.", "Як маленький бокс — з відчуттям вечора."] },
    { title: "Всередині", lines: ["Тепло.", "Запах вечора.", "М’якість.", "Тиха деталь із Сеулу."] },
  ],
  items: [
    {
      id: 1,
      name: "Lip Serum",
      description: "Сироватка для губ з живильними властивостями.",
      variants: [
        { name: "01 Soft Fig", description: "м’який рожевий" },
        { name: "02 Juicy Berry", description: "ягідний, трохи сміливіший" },
        { name: "03 Peach Squeeze", description: "теплий персик" },
        { name: "04 Rare Plum", description: "сливовий нюд" },
      ],
      link: "https://global.oliveyoung.com/product/detail?prdtNo=GA250732642&srsltid=AfmBOorbUJ8KCvOyY1bqXT0W4LkxetGx8zdjSw_e4pXyqJr95yVdGT3i",
      imageUrl: "/lip_gloss.JPG",
      imageAlt: "lip serum"
    },
    {
      id: 2,
      name: "Body/hair mist",
      description: "Легкий спрей для тіла та волосся з приємним ароматом.",
      variants: [
        { name: "White Dazzle", description: "чистий квітковий, дуже ніжний" },
        { name: "Sunlit Apple", description: "легка свіжість, світлий настрій" },
        { name: "Pale Peony", description: "півонія, м’яко і делікатно" },
        { name: "Osmanthus Blanc", description: "теплий, чистий, спокійний" },
      ],
      link: "https://global.oliveyoung.com/display/page/brand-page?brandNo=B00121&srsltid=AfmBOooO8HyUNwzlPa-unCdqzUVLw7fZ5fmwBOK8cRHaN3a-tpe0jDGu",
      imageUrl: "/round_around.JPG",
      imageAlt: "body mist"
    },
    {
      id: 3,
      name: "Крем для рук",
      description: "Зволожуючий крем для рук з натуральними інгредієнтами.",
      variants: [
        { name: "Slow Down", description: "musk, muguet, vanilla" },
      ],
      link: "https://global.oliveyoung.com/display/page/brand-page?brandNo=B00617&srsltid=AfmBOopVgIrpJUZbFsB7oC8p5dM48wGrRPUyHkv1AHX0GpnzNaaoBB4f",
      imageUrl: "/hand_cream.jpg",
      imageAlt: "hand cream"
    },
    {
      id: 4,
      name: "Kombucha в стіках",
      description: "Освіжаючий напій комбуча у зручних стіках.",
      variants: [
        { name: "Original Lemon", description: "класичний лимонадний смак" },
        { name: "Strawberry & Kiwi", description: "ківі-полуниця, смачне поєднання поєднання" },
      ],
      link: "https://global.oliveyoung.com/display/page/brand-page?brandNo=B00136&srsltid=AfmBOoqqfiK6P3ML9O2tYvnQPycfTpgEtcsxVwV3lyTY5NcTIPTnyqjq",
      imageUrl: "/kombucha.jpg",
      imageAlt: "kombucha"
    },
    {
      id: 5,
      name: "Тканинна сумка для найнеобхіднішого",
      description: "Екологічна сумка з приємного матеріалу для щоденного використання.",
      variants: [
        { name: "Standard", description: "універсальний розмір і дизайн" },
      ],
      link: "https://avamhome.com/product/detail.html?product_no=2861&cate_no=523&display_group=1",
      imageUrl: "/bag.jpg",
      imageAlt: "bag"
    },
  ],
};

export default function Page() {
  return (
    <main>
      <YouTubeBackground videoId="nOSQvWGFzWo" />
      <Story box={sunsetBox}/>

      <section className="boxWrap">
        <div className="boxInner">
          <BoxSection box={sunsetBox} />
          <OrderSection box={sunsetBox} />
        </div>
        <Footer />
      </section>
    </main>
  );
}