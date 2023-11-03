import { CardT } from "@/types";


export default function CardHero({ info }: { info: CardT }) {
  const { intelligence, strength, speed, durability, power, combat } = info.powerstats;
  const { name, images, alignment, race } = info;
  const sumStats = intelligence + strength + speed + durability + power + combat;

  return (
    <div className={`p-2 text-center rounded-lg bg-slate-600 font-bold py-2 px-4 rounded border-slate-700 border-b-4 hover:brightness-150`}>
      <h1>{name}</h1>
      <img src={images.sm} alt={name} />
      <h2>{sumStats}</h2>
    </div>
  );
}
