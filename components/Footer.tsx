import Image from "next/image";
import Apple_logo from "@/app/assets/Apple logo.png";
import PlayMarket from "@/app/assets/play market.jpg";
import Logo from "@/app/assets/ProfilPhoto.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a0d14] text-gray-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="logo"
                width={44}
                height={44}
                className="rounded-xl shadow-lg"
              />
              <h1 className="text-2xl font-black tracking-wide text-white">
                Vetsu<span className="text-yellow-400">Servise</span>
              </h1>
            </div>
            <p className="text-gray-500 mt-4 text-sm max-w-[250px] leading-relaxed">
              Eng ommabop mobil oyinlar uchun ishonchli xizmat va qulay
              xaridlar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="flex items-center gap-3 border border-white/20 rounded-2xl px-4 py-3 w-[160px] cursor-pointer bg-white/5 hover:bg-white/10 transition-colors">
              <Image
                src={Apple_logo}
                alt="apple"
                width={28}
                height={28}
                className="invert"
              />
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-medium">Yuklash</p>
                <h1 className="text-sm font-bold text-white leading-tight">
                  App Store
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3 border border-white/20 rounded-2xl px-4 py-3 w-[160px] cursor-pointer bg-white/5 hover:bg-white/10 transition-colors">
              <Image
                src={PlayMarket}
                alt="play"
                width={28}
                height={28}
                className="rounded-md"
              />
              <div className="text-left">
                <p className="text-[10px] text-gray-400 font-medium">Yuklash</p>
                <h1 className="text-sm font-bold text-white leading-tight">
                  Play Market
                </h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end gap-6 text-2xl">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors hover:scale-110 transform duration-200"
            >
              📘
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors hover:scale-110 transform duration-200"
            >
              📷
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors hover:scale-110 transform duration-200"
            >
              ▶️
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors hover:scale-110 transform duration-200"
            >
              💬
            </a>
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

        <div className="text-center text-gray-500 text-xs tracking-wide">
          © {new Date().getFullYear()} MegaCelify Store — Barcha huquqlar
          himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
