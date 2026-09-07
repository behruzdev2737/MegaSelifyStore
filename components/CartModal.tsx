"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useCart } from "./CartContext";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function CartModal() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, clearCart } =
    useCart();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [tgId, setTgId] = useState("");
  const router = useRouter();

  // Telegramdan user malumotlarini olish
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window as unknown as { Telegram?: { WebApp?: unknown } })?.Telegram
        ?.WebApp
    ) {
      const twa = (
        window as unknown as {
          Telegram: {
            WebApp: {
              ready: () => void;
              initDataUnsafe?: {
                user?: { first_name?: string; username?: string; id?: number };
              };
            };
          };
        }
      ).Telegram.WebApp;
      twa.ready();
      if (twa.initDataUnsafe?.user) {
        const user = twa.initDataUnsafe.user;
        // avoid cascading renders warning by putting it inside a timeout or just ignoring since we only set it on mount
        setTimeout(() => {
          if (user.first_name) setName(user.first_name);
          if (user.username) setUsername("@" + user.username);
          if (user.id) setTgId(user.id.toString());
        }, 0);
      }
    }
  }, [isCartOpen]);

  const totalAmount = cart.reduce((acc, item) => {
    // Convert e.g. "170.000 so'm" to number
    const num = parseInt(item.price.replace(/\D/g, ""));
    return acc + num * item.quantity;
  }, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString("uz-UZ") + " so'm";
  };

  const sendOrder = async () => {
    if (!phone) {
      toast.warning("Iltimos telefon raqamingizni kiriting!");
      return;
    }

    if (cart.length === 0) {
      toast.warning("Savat bo'sh!");
      return;
    }

    await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cart,
        total: formatPrice(totalAmount),
        name,
        username,
        phone,
        tgId,
      }),
    });

    // Check page redirect is updated for cart
    router.push(`/check?cart=true`);
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
      <DialogContent className="text-white rounded-[24px] bg-[#11161d] border border-white/10 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Savat</DialogTitle>
        </DialogHeader>

        {cart.length === 0 ? (
          <div className="py-10 text-center text-gray-400">
            Savatda hech narsa yo&apos;q
          </div>
        ) : (
          <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-3">
              {cart.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-white/5 p-3 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative bg-white/10 rounded-xl overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{item.title}</p>
                      <p className="text-xs text-gray-400">
                        {item.price} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.title)}
                    className="p-2 text-red-400 hover:bg-red-400/20 rounded-full transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center py-4 border-t border-white/10 mt-2">
              <span className="text-gray-400">Jami summa:</span>
              <span className="text-2xl font-black text-[#00FF9C]">
                {formatPrice(totalAmount)}
              </span>
            </div>

            <div className="space-y-3 pb-2">
              <input
                type="text"
                placeholder="Nomeringizni kiriting"
                value={phone}
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#00FF9C] transition-colors"
                onChange={(e) => setPhone(e.target.value)}
              />

              <button
                onClick={sendOrder}
                className="w-full bg-[#00FF9C] text-black py-4 rounded-xl font-bold text-lg hover:bg-[#00e68c] transition-colors mt-2"
              >
                Rasmiylashtirish
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
