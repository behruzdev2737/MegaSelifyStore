"use client";

import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-black">
      <h1 className="text-3xl font-bold text-center mb-4">
        Yordam va Qollab-quvvatlash
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Oyinlar va akkaunt bilan bogliq savollaringiz bolsa, shu yerda javob topasiz.
      </p>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="font-semibold text-lg mb-2">
            ❓ Qanday oyinlar mavjud?
          </h2>
          <p className="text-gray-700">
            Saytimizda Brawl Stars, Clash of Clans, Clash Royale, Hay Day va Mo.co
            oyinlari mavjud.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="font-semibold text-lg mb-2">
            ❓ Bazi oyinlarda “Tamirlashda” yozuvi chiqadi, bu nima?
          </h2>
          <p className="text-gray-700">
            Bu oyin hozircha vaqtinchalik ochirilganini bildiradi. Tez orada
            yana faol holatga qaytadi.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="font-semibold text-lg mb-2">
            ❓ Akkauntim xavfsizmi?
          </h2>
          <p className="text-gray-700">
            Ha. Biz foydalanuvchilarning shaxsiy malumotlariga zarar yetkazmaymiz
            va maxfiylikni saqlaymiz.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="font-semibold text-lg mb-2">
            ❓ Yordam kerak bolsa qayerga murojaat qilaman?
          </h2>
          <p className="text-gray-700">
            Agar savolingiz shu sahifada bolmasa, support bilan boglanishingiz
            mumkin.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white rounded-2xl p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Support bilan boglanish</h2>
        <p className="text-sm mb-4">
          Savollaringiz bolsa, biz sizga yordam beramiz.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="https://t.me/vetsu_admin"
            className="bg-white text-black px-5 py-2 rounded-xl font-semibold"
            
          >
            Telegram Support
          </Link>

          <Link
            href="/"
            className="border border-white px-5 py-2 rounded-xl font-semibold"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} MegaSelify Store
      </p>
    </div>
  );
}
