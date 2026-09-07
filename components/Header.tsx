"use client";

import Image from "next/image";
import Link from "next/link";
import ProfilPhoto from "@/app/assets/ProfilPhoto.png";
import { useCart } from "@/components/CartContext";
import { ShoppingCart } from "lucide-react";
import CartModal from "@/components/CartModal";

const Header = () => {
  const { cart, setIsCartOpen } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="bg-[#0a0d14]/90 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold md:text-2xl group flex items-center"
          >
            <div className="flex items-center">
              <div className="px-2 text-white flex flex-col leading-none">
                <span className="tracking-widest text-[10px] uppercase text-gray-400">
                  Vetsu
                </span>
                <span className="text-xl tracking-wide font-black">
                  Servise
                </span>
              </div>
              <span className="ml-2 px-3 py-1 bg-yellow-400 rounded-md text-black text-sm uppercase tracking-wider font-extrabold group-hover:bg-yellow-300 transition-colors">
                STORE
              </span>
            </div>
          </Link>
          <nav className="flex gap-6 text-gray-300 items-center">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white hover:text-yellow-400 transition-colors"
            >
              <ShoppingCart size={28} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0a0d14]">
                  {totalItems}
                </span>
              )}
            </button>
            <Link
              href="/profile"
              className="hover:opacity-80 transition-opacity p-1 border border-white/20 rounded-full"
            >
              <Image
                src={ProfilPhoto}
                width={36}
                height={36}
                alt="profilPhoto"
                className="rounded-full"
              />
            </Link>
          </nav>
        </div>
      </header>
      <CartModal />
    </>
  );
};

export default Header;
