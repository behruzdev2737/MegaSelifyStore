"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

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

  return (
    <div className="min-h-[700px] flex items-center justify-center bg-gradient-to-b from-purple-700 to-purple-900">
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <span className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
          <p className="text-white text-xl font-bold">
            Buyurtma tekshirilmoqda...
          </p>
        </div>
      ) : success ? (
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center animate-bounce">
            <Check size={50} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            Buyurtma muvaffaqiyatli qabul qilindi!
          </h1>
          <p className="text-xl font-bold text-gray-300">@vetsu_admin telegramdan yozishini kuting!</p>
        </div>
      ) : null}
    </div>
  );
}
