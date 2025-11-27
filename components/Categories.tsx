import { categories } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import Brawl_stars from "@/app/assets/BrawlStars.jpg";
import clash_of_clans from "@/app/assets/clash of clans.jpg";
import clash_royal from "@/app/assets/clashroyal.jpg";
import moco from "@/app/assets/moco.jpg";
import hay_day from "@/app/assets/hay day.jpg";
import Apple_logo from "@/app/assets/Apple logo.png";
import PlayMarket from "@/app/assets/play market.jpg";

const Categories = () => {
  return (
    <div className="">
      <div className="max-w-3xl mx-auto py-6 grid grid-cols-1 gap-9 place-items-center md:grid-cols-2">
        {categories.map((cat) => (
          <Link key={cat.id} href={`/games/${cat.slug}`}>
            <div
              className="
       w-[350px]
        bg-white rounded-3xl overflow-hidden shadow-lg 
        transition-transform duration-300 hover:scale-[1.03]
        cursor-pointer
      "
            >
              <div className="w-full h-[180px] relative">
                <Image
                  src={cat.image}
                  alt={cat.slug}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-white p-5 flex items-center gap-3">
                <span className="text-xl text-black">→</span>
                <p className="text-lg font-medium text-black">{cat.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center py-[30px] text-4xl font-bold text-black">
        Bizning oyinlar
      </div>
      <div className="max-w-3xs mx-auto py-3 px-7 grid grid-cols-3 justify-items-center gap-1">
        <Image
          src={Brawl_stars}
          alt="brawl_stars"
          width={50}
          height={50}
          className="rounded-2xl"
        />
        <Image
          src={clash_of_clans}
          alt="clash_of_clans"
          width={50}
          height={50}
          className="rounded-2xl"
        />
        <Image
          src={clash_royal}
          alt="clash_royal"
          width={50}
          height={50}
          className="rounded-2xl"
        />
        <Image
          src={moco}
          alt="moco"
          width={50}
          height={50}
          className="rounded-2xl"
        />
        <Image
          src={hay_day}
          alt="hay_day"
          width={50}
          height={50}
          className="rounded-2xl"
        />
      </div>
      <div className="flex gap-3 justify-center py-3">
        <Link href={'https://apps.apple.com/ru/developer/supercell/id488106216'} className="flex items-center gap-2 border border-black rounded-xl px-3 py-2 w-[150px] bg-black">
          <Image src={Apple_logo} alt="Apple logo" width={35} height={35} />
          <div>
            <p className="text-[10px] font-semibold">Yuklash</p>
            <h1 className="text-sm font-bold">App Store</h1>
          </div>
        </Link>

        <Link href={'https://play.google.com/store/apps/dev?id=6715068722362591614&hl=ru'} className="flex items-center gap-2 border border-black rounded-xl px-3 py-2 w-[150px] bg-black">
          <Image
            src={PlayMarket}
            alt="Play Market logo"
            width={35}
            height={35}
          />
          <div>
            <p className="text-[10px] font-semibold">Yuklash</p>
            <h1 className="text-sm font-bold">Play Market</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
