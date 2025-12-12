"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "react-toastify";

export default function BuyModal({ product, open, onClose }: any) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const sendOrder = async () => {
    if (!name || !username || !phone) {
      toast.warning('iltimos malumotlarni toliq toldiring!')
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

    toast.success('Buyurtma yuborildi tez orada admin siz bilan boglanadi')
    onClose(); 
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="text-black rounded-xl bg-blue-400">
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
              className="w-full border-2 border-black p-2 rounded bg-white"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Telegram username (@user)"
              className="w-full border-2 border-black p-2 rounded bg-white"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="text"
              placeholder="Nomeringizni kiriting"
              className="w-full border-2 border-black p-2 rounded bg-white"
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              onClick={sendOrder}
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
