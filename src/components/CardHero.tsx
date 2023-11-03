import { CardT } from "@/types";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import swordIcon from "../../public/assets/sword_icon_138128.png"

export default function CardHero({ info }: { info: CardT }) {
  const { intelligence, strength, speed, durability, power, combat } = info.powerstats;
  const { name, images} = info;
  const sumStats = intelligence + strength + speed + durability + power + combat;
  const theme = useAppSelector((state) => state.changeTheme.value);

  return (
    <div className={`p-2 text-center rounded-lg ${theme.backgroundCard} font-bold py-2 px-4 rounded  border-b-4 hover:brightness-150`}>
      <h1>{name}</h1>
      <img src={images.sm} alt={name} className="rounded-lg"/>
      <div className="flex  w-full justify-center p-2">
      <Image src={swordIcon} width={20} height={20} alt={name} />
      <h2>{sumStats}</h2>
      </div>
    </div>
  );
}
