import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import brawlpassplus from "@/app/assets/59144ca6-dbf7-4521-bf6b-0713887e4e7f.png";
import gemIcon from "@/app/assets/gem.png";
import skinIcon from "@/app/assets/skin_icon.png";

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
      img: "https://game-assets.store.supercell.com/brawlstars/59144ca6-dbf7-4521-bf6b-0713887e4e7f.png",
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
  const gems = [
    {
      title: "30 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/af985a4f-194c-4a2d-b2d1-79ae58a7bd0b.png",
      points: "+100 achko",
      price: "18.000 som",
    },
    {
      title: "80 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/00cb8e99-9c47-4fc9-b0b3-3dcf00379e1c.png",
      points: "+250 achko",
      price: "45.000 som",
    },
    {
      title: "170 Kristal",
      bg: "bg-[#00FF9C]",
      img: "	https://game-assets.store.supercell.com/brawlstars/f67d5aed-297d-496c-bbfd-3d10a9087c45.png",
      points: "500 achko",
      price: "85.000 som",
    },
    {
      title: "360 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/44c07e98-ef4c-4090-9fa3-21ed7f6738e5.png",
      points: "+1 000 achko",
      price: "169.000 som",
    },
    {
      title: "950 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/92408335-2cd4-4b72-9446-666a3a9d562f.png",
      points: "+2 500 achko",
      price: "359.000 som",
    },
    {
      title: "2000 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/91211913-095a-4497-86d2-c5ebda8ce0a4.png",
      points: "+5 000 achko",
      price: "719.000 som",
    },
  ];
  const skins = [
    {
      title: "Mecha-Crow",
      bg: "bg-purple-200",
      video:
        "https://game-assets.store.supercell.com/brawlstars/9647aa59-73eb-4bd8-9763-606f225a5d5e.webm#t=0.1",
      points: "+750 achko",
      price: "110.000 som",
    },
    {
      title: "Phonics-Crow",
      bg: "bg-yellow-200",
      video:
        "https://game-assets.store.supercell.com/brawlstars/26c25b4a-33b5-4cc6-9462-d72a483d40bf.webm#t=0.1",
      points: "+750 achko",
      price: "110.000 som",
    },
    {
      title: "Mecha-Edgar",
      bg: "bg-blue-200",
      video:
        "https://game-assets.store.supercell.com/brawlstars/f2fb0e1c-bcac-49ba-9f69-e1b0a09d8263.webm#t=0.1",
      points: "+750 achko",
      price: "110.000 som",
    },
    {
      title: "Qurol-Pam",
      bg: "bg-purple-200",
      video:
        "https://game-assets.store.supercell.com/brawlstars/9c55a816-13c8-48e1-87ed-2c68dbaecd50.webm#t=0.1",
      points: "+750 achko",
      price: "110.000 som",
    },
    {
      title: "Robo-Mike",
      bg: "bg-blue-200",
      video:
        "https://game-assets.store.supercell.com/brawlstars/dd7d96a2-209c-4a8d-a28d-aad9bdaee266.webm#t=0.1",
      points: "+750 achko",
      price: "110.000 som",
    },
    {
      title: "Mecha-Mortis",
      bg: "bg-purple-200",
      video:
        "https://game-assets.store.supercell.com/brawlstars/074ba485-3a43-4034-8e01-fbb116d960d3.webm#t=0.1",
      points: "+750 achko",
      price: "110.000 som",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-purple-600 to-purple-900 p-6 py-20">
      <div>
        <div className="flex items-center justify-center gap-5 py-6">
          <Image
            src={brawlpassplus}
            alt={"brawl pass plus"}
            className="w-[60px]"
          />
          <h1 className="font-bold text-3xl">Premium Passlar</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {cards.map((item, i) => (
            <Card key={i} className={`rounded-2xl shadow-xl p-4 ${item.bg}`}>
              <CardContent className="flex flex-col items-center text-center gap-4">
                <h2 className="text-3xl font-extrabold text-white drop-shadow">
                  {item.title}
                </h2>

                <div className="w-40 h-40 relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
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
        <div className="w-full h-[3px] bg-black rounded-full my-10"></div>
        <div className="flex items-center justify-center gap-5 py-6">
          <Image src={gemIcon} alt={"brawl pass plus"} className="w-[60px]" />
          <h1 className="font-bold text-3xl">Kristal Narxlari</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {gems.map((item, i) => (
            <Card key={i} className={`rounded-2xl shadow-xl p-4 ${item.bg}`}>
              <CardContent className="flex flex-col items-center text-center gap-4">
                <h2 className="text-3xl font-extrabold text-white drop-shadow">
                  {item.title}
                </h2>

                <div className="w-40 h-40 relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
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
        <div className="w-full h-[3px] rounded-2xl bg-black my-10"></div>
        <div className="flex flex-col items-center justify-center gap-5 py-6">
          <Image src={skinIcon} alt={"brawl pass plus"} className="w-[60px]" />
          <h1 className="font-bold text-3xl">Skin Narxlari</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {skins.map((item, i) => (
            <Card key={i} className={`rounded-2xl shadow-xl p-4 ${item.bg}`}>
              <CardContent className="flex flex-col items-center text-center gap-4">
                <h2 className="text-3xl font-extrabold text-white drop-shadow">
                  {item.title}
                </h2>

                <div className="w-80 h-50 relative flex items-center justify-center">
                  <video
                    src={item.video}
                    loop
                    autoPlay
                    muted
                    playsInline
                    className=" object-contain"
                  />
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
    </div>
  );
}
