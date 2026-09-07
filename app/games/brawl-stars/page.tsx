"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import brawlpassplus from "@/app/assets/59144ca6-dbf7-4521-bf6b-0713887e4e7f.png";
import gemIcon from "@/app/assets/gem.png";
import GradientText from "@/components/GradientText";
import { useCart } from "@/components/CartContext";
import { toast } from "react-toastify";
import { CartItem } from "@/components/CartContext";

export default function BrawlPassCards() {
  const cards = [
    {
      title: "PRO PASS",
      bg: "bg-lime-400",
      img: "https://game-assets.store.supercell.com/brawlstars/cc6485a2-0ad7-45d9-8a44-975f4e18f266.png",
      points: "+850 achko",
      price: "170.000 so'm",
    },
    {
      title: "BRAWL PASS PLUS",
      bg: "bg-[#b886fb]",
      img: "https://game-assets.store.supercell.com/brawlstars/59144ca6-dbf7-4521-bf6b-0713887e4e7f.png",
      points: "+500 achko",
      price: "95.000 so'm",
    },
    {
      title: "BRAWL PASS",
      bg: "bg-[#fbde5a]",
      img: "https://game-assets.store.supercell.com/brawlstars/25db9757-f227-492c-9d7a-77f4f749e56e.png",
      points: "+350 achko",
      price: "65.000 so'm",
    },
  ];
  const gems = [
    {
      title: "30 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/af985a4f-194c-4a2d-b2d1-79ae58a7bd0b.png",
      points: "+100 achko",
      price: "18.000 so'm",
    },
    {
      title: "80 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/00cb8e99-9c47-4fc9-b0b3-3dcf00379e1c.png",
      points: "+250 achko",
      price: "45.000 so'm",
    },
    {
      title: "170 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/f67d5aed-297d-496c-bbfd-3d10a9087c45.png",
      points: "500 achko",
      price: "85.000 so'm",
    },
    {
      title: "360 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/44c07e98-ef4c-4090-9fa3-21ed7f6738e5.png",
      points: "+1 000 achko",
      price: "169.000 so'm",
    },
    {
      title: "950 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/92408335-2cd4-4b72-9446-666a3a9d562f.png",
      points: "+2 500 achko",
      price: "359.000 so'm",
    },
    {
      title: "2000 Kristal",
      bg: "bg-[#00FF9C]",
      img: "https://game-assets.store.supercell.com/brawlstars/91211913-095a-4497-86d2-c5ebda8ce0a4.png",
      points: "+5 000 achko",
      price: "719.000 so'm",
    },
  ];
  const { addToCart } = useCart();

  const buy = (item: Omit<CartItem, 'quantity'>) => {
    addToCart(item);
    toast.success(`${item.title} savatga qo'shildi!`);
  };

  return (
    <div className="w-full min-h-screen bg-[#0e1219] text-white flex justify-center items-center p-6 py-20 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl">
        {/* PREMIUM PASS SECTION */}
        <div className="flex justify-center gap-5 py-10">
          <div className="flex items-center gap-5 bg-[#151a25] px-8 py-4 rounded-3xl border border-white/5 shadow-2xl">
            <Image
              src={brawlpassplus}
              alt="brawl pass plus"
              width={70}
              height={70}
              className="drop-shadow-lg hover:scale-110 transition-transform"
            />
            <GradientText
              colors={["#FFD700", "#FFF3B0", "#FFC300", "#FFD700"]}
              animationSpeed={2}
              showBorder={false}
              className="text-4xl md:text-5xl font-black tracking-widest leading-none drop-shadow-md"
            >
              PREMIUM PASSLAR
            </GradientText>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <Card
              key={i}
              className={`relative rounded-[32px] p-1 border-none shadow-[0_10px_40px_rgba(0,0,0,0.5)] 
        overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]
        cursor-pointer group ${item.bg}`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0 pointer-events-none" />
              <CardContent className="relative z-10 flex flex-col items-center text-center gap-5 pt-8 pb-6">
                <h2 className="text-3xl font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide group-hover:scale-105 transition-transform">
                  {item.title}
                </h2>

                <div className="w-48 h-48 relative drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <span className="px-5 py-2 bg-black/40 backdrop-blur-md text-white border border-white/20 rounded-full font-bold shadow-inner">
                  {item.points}
                </span>

                <Button
                  className="w-[90%] mt-2 text-xl font-black py-7 rounded-2xl bg-white text-black hover:bg-gray-200 shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-transparent"
                  onClick={() => buy(item)}
                >
                  {item.price}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-16"></div>

        {/* KRISTAL SECTION */}
        <div className="flex justify-center gap-5 py-10">
          <div className="flex items-center gap-5 bg-[#151a25] px-8 py-4 rounded-3xl border border-white/5 shadow-2xl">
            <Image
              src={gemIcon}
              alt="Kristal"
              width={70}
              height={70}
              className="drop-shadow-[0_0_15px_rgba(0,255,156,0.5)] hover:scale-110 transition-transform"
            />
            <GradientText
              colors={["#00FF9C", "#85FFD1", "#00E68C", "#00FF9C"]}
              animationSpeed={2}
              showBorder={false}
              className="text-4xl md:text-5xl font-black tracking-widest leading-none drop-shadow-md"
            >
              KRISTAL NARXLARI
            </GradientText>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gems.map((item, i) => (
            <Card
              key={i}
              className={`relative rounded-[32px] p-1 border-none shadow-[0_10px_40px_rgba(0,0,0,0.5)] 
        overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]
        cursor-pointer group bg-[#11161d] border border-white/5`}
            >
              {/* Glow effect specific for gems */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-[#00FF9C]/10 blur-[50px] pointer-events-none" />

              <CardContent className="relative z-10 flex flex-col items-center text-center gap-5 pt-8 pb-6">
                <h2 className="text-3xl font-black text-white drop-shadow-md tracking-wide group-hover:scale-105 transition-transform">
                  {item.title}
                </h2>

                <div className="w-44 h-44 relative drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <span className="px-5 py-2 bg-black/50 backdrop-blur-md text-[#00FF9C] border border-[#00FF9C]/30 rounded-full font-bold shadow-inner">
                  {item.points}
                </span>

                <Button
                  className="w-[90%] mt-2 text-xl font-black py-7 rounded-2xl bg-[#00FF9C] hover:bg-[#00e68c] text-black shadow-[0_0_20px_rgba(0,255,156,0.4)] transition-all hover:scale-105 active:scale-95"
                  onClick={() => buy(item)}
                >
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
