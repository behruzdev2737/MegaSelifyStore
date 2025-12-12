export async function POST(req) {
  const data = await req.json();

  const botToken = process.env.TG_BOT_TOKEN;
  const chatId = process.env.MY_CHAT_ID;

  const msg = `
🛒 Yangi buyurtma!

📦 Mahsulot: ${data.product.title}
💰 Narxi: ${data.product.price}
⭐ Achko: ${data.product.points}

👤 Ism: ${data.name}
🔗 Username: ${data.username}
📞 Raqam: ${data.phone}
  `;

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: msg }),
  });

  return Response.json({ ok: true });
}
