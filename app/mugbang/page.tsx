import { BoxSection } from "@/components/BoxSection";
import Footer from "@/components/Footer";
import { OrderSection } from "@/components/OrderSection";
import { Story } from "@/components/Story";
import { YouTubeBackground } from "@/components/YouTubeBackground"
import { Box } from "@/utils/types";

const seoulMugbangBox: Box = {
  id: 3,
  video: "uAtzy8u2MYk",
  name: "Seoul Mugbang",
  boxPrice: 2400,
  description:
    "Seoul Mugbang — це коли ти не поспішаєш. Лапша запарюється. Неон відбивається у вікні. Місто гуде десь далеко, але тут — тільки ти і твій стіл.",

  story: [
    {
      kicker: "Seoul memo / entry 003",
      title: "Seoul Mugbang",
      lines: [
        "Сеул. Пізня година.",
        "Світло з вітрини 7-Eleven.",
        "Ти береш те, що хочеться зараз."
      ]
    },
    {
      lines: [
        "Пластикова кришка клацає.",
        "Пара піднімається.",
        "Соус — густий і теплий."
      ]
    },
    {
      lines: [
        "Це не про голод.",
        "Це про момент.",
        "Про паузу між думками."
      ]
    },
    {
      lines: [
        "Місто за вікном живе своїм життям.",
        "Ти — своїм."
      ]
    },
    {
      title: "Ми зберегли це",
      lines: [
        "Не як сувенір.",
        "Не як набір снеків.",
        "Як нічну сцену."
      ]
    },
    {
      title: "Всередині",
      lines: [
        "Трохи гостроти.",
        "Трохи солодкого.",
        "І багато атмосфери."
      ]
    }
  ],

  items: [
    {
      id: 1,
      name: "Samyang Buldak Ramen (2 упакування)",
      description:
        "легендарна південнокорейська локшина швидкого приготування від компанії Samyang, відома своєю екстремальною гостротою (назва перекладається як `вогняна курка`) та насиченим смаком. Вона складається з пружної пшеничної локшини, дуже гострого соусу на основі перцю чилі та курячого аромату. Популярні варіанти включають сирний, карбонару та 2x Spicy.",
      variants: [
        { name: "Original", description: "класична гостра версія" },
        { name: "Carbonara", description: "гостро-кремова версія" }
      ],
      link: "#",
      imageUrl: "/buldak.webp",
      imageAlt: "buldak ramen"
    },
    {
      id: 2,
      name: "Yopokki Cup (2 упакування)",
      description:
        "популярна корейська страва швидкого приготування (вулична їжа), що являє собою м’які рисові кльоцки (токпоккі) у зручному стаканчику. Вони готові всього за кілька хвилин, мають насичений соус (солодкий, гострий, часниковий, кімчі) і є чудовим варіантом для швидкого перекусу. ",
      variants: [
        { name: "Classic", description: "традиційний смак" }
      ],
      link: "#",
      imageUrl: "/yopokki.png",
      imageAlt: "yopokki cup"
    },
    {
      id: 3,
      name: "Korean CW Mochi Chocolate Cookie",
      description:
        "популярні шоколадні ласощі, що поєднують насичений шоколадний смак із м’якою, жувальною текстурою. Складається з м’якого печива зі справжньою шоколадною стружкою та тягучою начинкою з мочі (клейкого рису) всередині.",
      variants: [
        { name: "Original", description: "класичний смак" }
      ],
      link: "#",
      imageUrl: "/coockie.webp",
      imageAlt: "korean mochi cookie"
    },
    {
      id: 4,
      name: "Korean Convenience Store Drink",
      description:
        "напій із корейського convenience store — щось випадкове і дуже “нічне”.",
      variants: [
        { name: "Peach Iced Tea", description: "солодкий і легкий" },
        { name: "Milk Soda", description: "м’яка кремова газованість" },
        { name: "secret choose", description: "таємний вибір, здивуйте мене" }
      ],
      link: "#",
      imageUrl: "/milkis.jpg",
      imageAlt: "korean drink can"
    },
    {
      id: 5,
      name: "Metal Chopsticks + Ramen Pot",
      description:
        "металеві палички і рамен-горщик. Маленька сцена для твого mukbang.",
      variants: [
        { name: "Standard", description: "мінімалістичний сет" }
      ],
      link: "#",
      imageUrl: "/ramen-pot.webp",
      imageAlt: "korean ramen pot"
    }
  ]
};


export default function Page() {
  return (
    <main>
      <YouTubeBackground videoId={seoulMugbangBox.video} />

      <Story box={seoulMugbangBox} />

      <section className="boxWrap">
        <div className="boxInner">
          <BoxSection box={seoulMugbangBox} />
          <OrderSection box={seoulMugbangBox} />
        </div>
        <Footer />
      </section>
    </main>
  )
};