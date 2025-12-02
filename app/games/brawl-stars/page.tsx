import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BrawlPassCards() {
  const cards = [
    {
      title: "PRO PASS",
      bg: "bg-lime-300",
      img: "https://game-assets.store.supercell.com/brawlstars/cc6485a2-0ad7-45d9-8a44-975f4e18f266.png",
      points: "+850 achko",
      price: "170.000 som",
    },
    {
      title: "BRAWL PASS PLUS",
      bg: "bg-purple-300",
      img: "	https://game-assets.store.supercell.com/brawlstars/59144ca6-dbf7-4521-bf6b-0713887e4e7f.png",
      points: "+500 achko",
      price: "80.000 som",
    },
    {
      title: "BRAWL PASS",
      bg: "bg-orange-300",
      img: "https://game-assets.store.supercell.com/brawlstars/25db9757-f227-492c-9d7a-77f4f749e56e.png",
      points: "+350 achko",
      price: "60.000 som",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-purple-600 to-purple-900 p-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {cards.map((item, i) => (
          <Card key={i} className={`rounded-2xl shadow-xl p-4 ${item.bg}`}>
            <CardContent className="flex flex-col items-center text-center gap-4">
              <h2 className="text-3xl font-extrabold text-white drop-shadow">{item.title}</h2>

              <div className="w-40 h-40 relative">
                <Image src={item.img} alt={item.title} fill className="object-contain" />
              </div>

              <span className="px-4 py-1 bg-white text-black rounded-full font-bold shadow">
                {item.points}
              </span>

              <Button className="w-full text-lg font-bold py-6 rounded-xl shadow-lg">
                {item.price}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
