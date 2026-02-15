import { BoxSection } from "@/components/BoxSection";
import Footer from "@/components/Footer";
import { OrderSection } from "@/components/OrderSection";
import { Story } from "@/components/Story";
import { YouTubeBackground } from "@/components/YouTubeBackground";
import { Box } from "@/utils/types";

const pureSeoulNightBox: Box = {
  id: 2,
  video: "NE8qBVTsxB4",
  name: "Pure Seoul Night Routine",
  boxPrice: 2800,
  description:
    "Pure Seoul Night — це тиха ніч для себе. Ніч без шуму, без зайвого світла. Лише м’який догляд, теплий вогонь і спокій, який залишається з тобою.",
  story: [
    {
      kicker: "Seoul memo / entry 002",
      title: "Pure Seoul NIght Routine",
      lines: [
        "Сеул. Ти.",
        "Пізня ніч. Атмосфера для себе.",
        "Повернення додому після довгого дня."
      ]
    },
    {
      lines: [
        "Неон стає м’якшим.",
        "Повітря — чистішим.",
        "Рух — повільнішим."
      ]
    },
    {
      lines: [
        "Це ніч без подій.",
        "Ніч без ролей.",
        "Просто ти, ніч, твоя кімната і речі, які тебе оточують."
      ]
    },
    {
      lines: [
        "Це місто, яка ніколи не спить, але в цю мить воно тихе.",
        "Сеул — заспокоює."
      ]
    },
    {
      title: "Ми зберегли це",
      lines: [
        "Не як фото.",
        "Не як сувенір.",
        "Як ритуал."
      ]
    },
    {
      title: "Всередині",
      lines: [
        "М’якість.",
        "Тепло.",
        "Тиха турбота про себе."
      ]
    }
  ],
  items: [
    {
      id: 1,
      name: "Purito Oat-in Calming Gel Cream",
      description:
        "Легкий заспокійливий гель-крем із вівсом. Мінімалістичний склад, чисте зволоження, без перевантаження.",
      variants: [
        { name: "Standard", description: "для чутливої та втомленої шкіри" }
      ],
      link: "https://global.oliveyoung.com/product/detail?prdtNo=GA250228767&srsltid=AfmBOoo6j0XAmEcQTglPyqekWy5bLKiJ7OPzcVxiPqo4qPQRKGaFYLEX",
      imageUrl: "/purito-cream.webp",
      imageAlt: "purito oat calming gel cream"
    },
    {
      id: 2,
      name: "Torriden Dive in Mask 2pic. Set",
      description:
        "Зволожуюча або calming маска для відновлення шкіри перед сном.",
      variants: [
        { name: "Hydrating", description: "глибоке зволоження" },
        { name: "Calming", description: "заспокійливий ефект" }
      ],
      link: "https://global.oliveyoung.com/product/detail?prdtNo=GA250430292&dataSource=search_result",
      imageUrl: "/torriden-mask.webp",
      imageAlt: "sheet mask"
    },
    {
      id: 3,
      name: "Нічний бальзам для губ (без кольору)",
      description:
        "Доглядовий бальзам для губ без відтінку. Працює поки ти спиш. Нуль блиску — тільки м’якість.",
      variants: [
        { name: "Berry", description: "максимально солодкий аромат" },
        { name: "Graipefruit", description: "ледве відчутний, але дуже приємний аромат" },
        { name: "Apple Lime", description: "аромати літнбого вечору на дворі" },
        { name: "Mint Choco", description: "для тих, хто любить експерименти" }
      ],
      link: "https://global.oliveyoung.com/product/detail?prdtNo=GA210811541&dataSource=search_result",
      imageUrl: "/lip-mask.webp",
      imageAlt: "night lip balm"
    },
    {
      id: 4,
      name: "Factory Normal Soy Candle",
      description:
        "Соєва свічка з м’яким ароматом. Тепле світло замість яскравого екрану.",
      variants: [
        { name: "Late night sex", description: "аромат, що заспокоює краще ніж будь-що" }
      ],
      link: "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000144464&utm_source=google&utm_medium=shopping_search&utm_campaign=onpro_emnet_googlepmax_25_0101_1231&utm_term=&_CAD=google_pmax&gad_source=1&gad_campaignid=19622638980&gbraid=0AAAAADKpDR4HsbbJ_6EeQ9dmLKbPvaDH6&gclid=Cj0KCQiA18DMBhDeARIsABtYwT2sn9JLRp1Cj2gwgIGKHFzD5KOQkjB19GqnnGamhzV4SctkM-AybOYaAg0KEALw_wcB&tab=product-info",
      imageUrl: "/candle.webp",
      imageAlt: "minimal candle"
    },
    {
      id: 5,
      name: "Sleeping Socks 5pic. Set",
      description:
        "М’які нейтральні шкарпетки для тепла та відчуття комфорту.",
      variants: [
        { name: "Набір", description: "набір з п`яти шкарпеток для сну" }
      ],
      link: "#",
      imageUrl: "/sleeping_socks.png",
      imageAlt: "sleep socks"
    }
  ]
};


export default function Page() {
  return (
    <main>
      <YouTubeBackground videoId={pureSeoulNightBox.video} />
      <Story box={pureSeoulNightBox}/>

      <section className="boxWrap">
        <div className="boxInner">
          <BoxSection box={pureSeoulNightBox} />
          <OrderSection box={pureSeoulNightBox} />
        </div>
        <Footer />
      </section>
    </main>
  );
}