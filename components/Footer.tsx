import Image from "next/image";
import Apple_logo from "@/app/assets/Apple logo.png";
import PlayMarket from "@/app/assets/play market.jpg";
import Logo from "@/app/assets/ProfilPhoto.png"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <Image src={Logo} alt="logo" width={50} height={50} className="rounded-xl" />
              <h1 className="text-2xl font-bold">
                Mega<span className="text-yellow-400">Celify</span>
              </h1>
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Eng ommabop mobil oyinlar uchun ishonchli xizmat.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2 border border-white rounded-xl px-3 py-2 w-[150px] cursor-pointer">
              <Image src={Apple_logo} alt="apple" width={32} height={32} />
              <div>
                <p className="text-[10px]">Yuklash</p>
                <h1 className="text-sm font-bold">App Store</h1>
              </div>
            </div>

            <div className="flex items-center gap-2 border border-white rounded-xl px-3 py-2 w-[150px] cursor-pointer">
              <Image src={PlayMarket} alt="play" width={32} height={32} />
              <div>
                <p className="text-[10px]">Yuklash</p>
                <h1 className="text-sm font-bold">Play Market</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end gap-5 text-xl">
            <a href="#" className="hover:text-yellow-400">📘</a>
            <a href="#" className="hover:text-yellow-400">📷</a>
            <a href="#" className="hover:text-yellow-400">▶️</a>
            <a href="#" className="hover:text-yellow-400">💬</a>
          </div>

        </div>

        <div className="h-[1px] bg-gray-700 my-6"></div>

        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MegaCelify Store — Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
