"use client";

import { Box } from "@/utils/types";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function Scene({ lines, title, kicker }: { lines: string[]; title?: string; kicker?: string }) {
  return (
    <section className="scene">
      <motion.div
        className="sceneInner"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.6, once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {kicker && <p className="kicker">{kicker}</p>}
        {title && <h2 className="title">{title}</h2>}
        <div className="lines">
          {lines.map((t, i) => (
            <p key={i} className="line">{t}</p>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function Story({ box }: {box: Box}) {
  // const scrollToBox = () => {
  //   document.getElementById("box")?.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  return (
    <div className="storyWrap">
      {box.story.map((scene, index) => (
        <Scene key={index} kicker={scene.kicker} title={scene.title} lines={scene.lines} />
      ))}
      {/* <Scene
        kicker="Seoul memo / entry 001"
        title="Seoul sunset"
        lines={["Сеул.", "Ранній вечір.", "Місто ще рухається — але вже не поспішає."]}
      />

      <Scene lines={["Світло стає м’якшим.", "Рух — повільнішим.", "Думки — голоснішими за слова."]} />
      <Scene lines={["Це та мить, яку ніхто не планує.", "Вона просто трапляється."]} />
      <Scene lines={["Деякі міста кричать.", "Сеул — шепоче.", "Особливо під вечір."]} />
      <Scene title="Ми зберегли це" lines={["Не як фото.", "Не як сувенір.", "Як маленький бокс — з відчуттям вечора."]} />
      <Scene title="Всередині" lines={["Тепло.", "Запах вечора.", "М’якість.", "Тиха деталь із Сеулу."]} /> */}

      {/* <section className="scene sceneEnd">
        <motion.div
          className="sceneInner"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.6, once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="title">{box.name}. Box.</h2>
          <p className="line">Якщо хочеш забрати цей спогад собі</p>

          <button className="cta" onClick={scrollToBox}>
            Отримати цей вечір
          </button>
        </motion.div>
      </section> */}
    </div>
  );
}
