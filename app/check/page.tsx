"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { toast } from "react-toastify";

export default function CheckPage() {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (success) {
      toast.success(
        "Buyurtma yuborildi, tez orada admin siz bilan bog'lanadi"
      );
    }
  }, [success]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e1219] px-4">
      <div className="bg-[#11161d] border border-white/5 p-10 rounded-[32px] shadow-2xl flex flex-col items-center gap-6 max-w-md w-full text-center">
        {loading ? (
          <>
            <span className="w-16 h-16 border-4 border-[#00FF9C] border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(0,255,156,0.5)]"></span>
            <p className="text-white text-xl font-bold mt-4 tracking-wide">
              Buyurtma tekshirilmoqda...
            </p>
          </>
        ) : success ? (
          <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 rounded-full bg-[#00FF9C]/20 flex items-center justify-center mb-2 shadow-[0_0_30px_rgba(0,255,156,0.3)]">
              <div className="w-16 h-16 rounded-full bg-[#00FF9C] flex items-center justify-center">
                <Check size={40} className="text-black stroke-[3]" />
              </div>
            </div>
            <h1 className="text-xl md:text-2xl font-black text-white drop-shadow-md">
              Buyurtma qabul qilindi!
            </h1>
            <p className="text-sm font-medium text-gray-400 mt-2 leading-relaxed">
              Tez orada adminimiz siz bilan bog&apos;lanadi. Iltimos, Telegram orqali <span className="text-[#00FF9C] font-bold">@vetsu_admin</span> xabarini kuting!
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
