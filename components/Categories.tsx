import { categories } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import Brawl_stars from "@/app/assets/BrawlStars.jpg";

import Apple_logo from "@/app/assets/Apple logo.png";
import PlayMarket from "@/app/assets/play market.jpg";

const Categories = () => {
  return (
    <div className="bg-[#0e1219] min-h-screen text-white pb-10">
      <div className="max-w-6xl mx-auto py-12 px-4 flex flex-wrap gap-6 justify-center md:justify-start">
        {categories.map((cat) => (
          <Link key={cat.id} href={`/games/${cat.slug}`}>
            <div
              className="
                w-[220px] h-[300px] flex flex-col
                rounded-[24px] overflow-hidden 
                transition-transform duration-200 hover:scale-105 hover:brightness-110
                cursor-pointer bg-[#0f0f11] shadow-lg
              "
            >
              {/* Image part */}
              <div className="relative w-full h-[240px]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>

              {/* Text part (Black footer) */}
              <div className="w-full h-[60px] bg-[#0c0c0e] flex items-center px-5">
                <p className="text-[17px] font-bold text-white tracking-wide">
                  {cat.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center py-[30px] text-4xl font-bold text-white">
        Bizning oyinlar
      </div>
      <div className="max-w-md mx-auto py-6 px-4 flex justify-center gap-4">
        <Image
          src={Brawl_stars}
          alt="brawl_stars"
          width={50}
          height={50}
          className="rounded-2xl shadow-lg hover:scale-110 transition-transform cursor-pointer border border-white/10"
        />
      </div>
      <div className="flex gap-4 justify-center py-6 mb-10 px-4 flex-wrap">
        <Link
          href={"https://apps.apple.com/ru/developer/supercell/id488106216"}
          className="flex items-center gap-3 border border-white/20 rounded-2xl px-4 py-3 w-[170px] bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md"
        >
          <Image
            src={Apple_logo}
            alt="Apple logo"
            width={30}
            height={30}
            className="invert"
          />
          <div className="text-left">
            <p className="text-[10px] font-medium text-gray-300">Yuklash</p>
            <h1 className="text-sm font-bold text-white leading-tight">
              App Store
            </h1>
          </div>
        </Link>

        <Link
          href={
            "https://play.google.com/store/apps/dev?id=6715068722362591614&hl=ru"
          }
          className="flex items-center gap-3 border border-white/20 rounded-2xl px-4 py-3 w-[170px] bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md"
        >
          <Image
            src={PlayMarket}
            alt="Play Market logo"
            width={30}
            height={30}
            className="rounded-md"
          />
          <div className="text-left">
            <p className="text-[10px] font-medium text-gray-300">Yuklash</p>
            <h1 className="text-sm font-bold text-white leading-tight">
              Play Market
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
