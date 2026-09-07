export async function POST(req) {
  const data = await req.json();

  const botToken = process.env.TG_BOT_TOKEN;
  const chatId = process.env.MY_CHAT_ID;

  let cartDetails = "";
  if (data.cart && data.cart.length > 0) {
    data.cart.forEach((item, index) => {
      cartDetails += `${index + 1}. ${item.title} - ${item.quantity} ta - ${item.price}\n`;
    });
  }

  const msg = `
🛒 Yangi buyurtma!

📦 Mahsulotlar:
${cartDetails}
💰 Jami summa: ${data.total}

👤 Ism: ${data.name}
🔗 Username: ${data.username}
📞 Raqam: ${data.phone}
🆔 Telegram ID: ${data.tgId ? data.tgId : "Noma'lum (Brauzerdan kirdi)"}
  `;

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: msg }),
  });

  return Response.json({ ok: true });
}
