"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Brawl_stars from "@/app/assets/BrawlStars.jpg";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fading out after 1.5 seconds
    const timer1 = setTimeout(() => {
      setFade(true);
    }, 1500);

    // Completely remove splash screen after 2 seconds (0.5s for fade)
    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading)
    return <div className="animate-in fade-in duration-500">{children}</div>;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0e1219] flex flex-col items-center justify-center transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center animate-in zoom-in duration-700">
        <div className="relative w-24 h-24 mb-6 shadow-[0_0_40px_rgba(255,255,255,0.2)] rounded-3xl overflow-hidden animate-bounce">
          <Image src={Brawl_stars} alt="Logo" fill className="object-cover" />
        </div>

        <div className="flex flex-col items-center text-white leading-none">
          <span className="tracking-[0.3em] text-xs uppercase text-gray-400 mb-1 font-medium">
            Vetsu
          </span>
          <span className="text-4xl tracking-wider font-black bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
            Servise
          </span>
        </div>

        <div className="mt-8 flex gap-2">
          <div className="w-3 h-3 bg-[#00FF9C] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-[#00FF9C] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-[#00FF9C] rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
