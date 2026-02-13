import Link from "next/link";
import { Item } from "../utils/types";
import Image from "next/image";
import OptionCard from "./OptiopnCard";

export default function OrderBlock({
  item,
  value,
  onChange
}: {
  item: Item;
  value?: string;
  onChange: (variantName: string) => void;
}) {
  return (
    <div className="orderBlock">
      <div className="blockHead">
        <Link href={item.link} target="_blank">
          <h4 className="underline">{item.name}</h4>
        </Link>
      </div>

      <p className="blockNote">{item.description}</p>

      <div className="blockMedia">
        <Image
          src={item.imageUrl || ""}
          alt={item.imageAlt || ""}
          fill
          sizes="(max-width: 860px) 92vw, 980px"
          priority={false}
        />
        <div className="blockMediaFade" />
        <div className="blockMediaLabel">{item.imageAlt}</div>
      </div>

      {item.variants.length > 0 ? (
        <div className="optGrid">
          {item.variants.map((v) => (
            <OptionCard
              key={v.name}
              groupName={item.id}     // група радіо
              title={v.name}
              sub={v.description}
              checked={value === v.name}
              onChange={() => onChange(v.name)}
            />
          ))}
        </div>
      ) : (
        <div className="includedRow">
          <div className="includedDot" aria-hidden="true" />
          <p className="includedText">Один варіант. Входить у кожен набір.</p>
        </div>
      )
      }
    </div>
  );
};