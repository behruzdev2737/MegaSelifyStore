"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function BuyModal({ product, open, onClose }: any) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const sendOrder = async () => {
    if (!name || !username || !phone) {
      toast.warning("iltimos malumotlarni toliq toldiring!");
      return;
    }

    await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product,
        name,
        username,
        phone,
      }),
    });

    toast.success("Buyurtma yuborildi tez orada admin siz bilan boglanadi");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="text-black rounded-xl bg-gradient-to-r from-green-500 via-red-500 to-blue-500 bg-[length:400%_400%] animate-[gradientMove_10s_ease_infinite]">
        <DialogHeader>
          <DialogTitle>Sotib olish</DialogTitle>
        </DialogHeader>

        {!product ? (
          <p>Mahsulot tanlanmadi</p>
        ) : (
          <div className="space-y-4">
            <p className="font-bold text-xl">{product.title}</p>
            <p className="text-lg">{product.price}</p>

            <input
              type="text"
              placeholder="Ismingizni kiriting"
              className="w-full p-2 rounded bg-white"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Telegram username (@user)"
              className="w-full p-2 rounded bg-white"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="text"
              placeholder="Nomeringizni kiriting"
              className="w-full p-2 rounded bg-white"
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              onClick={async () => {
                await sendOrder();
                if (name && username && phone) {
                  router.push(`/check?title=${encodeURIComponent(product.title)}
        &price=${encodeURIComponent(product.price)}
        &img=${encodeURIComponent(product.img)}`);
                }
              }}
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-bold"
            >
              Buyurtma berish
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
