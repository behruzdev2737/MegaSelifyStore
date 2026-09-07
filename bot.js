require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

// .env faylidan tokenni olamiz
const token = process.env.TG_BOT_TOKEN;

// Long-polling orqali botni ishga tushiramiz (Vercel kerak emas, kompyuterni o'zida ishlaydi)
const bot = new TelegramBot(token, { polling: true });

console.log("Bot ishga tushdi... Telegramdan /start ni bosib tekshiring!");

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  // Stiker ID si (Hozircha hammada ishlaydigan standart o'rdak stikeri)
  // O'zingiz xohlagan Brawl Stars premium stikeri ID sini olish uchun Telegramda
  // @idstickerbot botiga o'sha stikerni yuboring va ID sini shu yerga qo'ying.
  const premiumStickerId =
    "CAACAgIAAxkBAAEFf-1jC_u_hGq2rLm9hQv9s1dO_W9xAQACXwADwDZPE3zO1Y_cZ6_QKQQ";

  try {
    // 1. Avval Stikerni yuboramiz
    await bot.sendSticker(chatId, premiumStickerId);

    // 2. Keyin pastidan Web App (Mini ilova) tugmasini yuboramiz
    await bot.sendMessage(
      chatId,
      "<b>💎 Vetsu Servise do'koniga xush kelibsiz!</b>\n\nQuyidagi tugma orqali do'konga kiring va xaridlarni boshlang:",
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "🎮 Do'konga kirish",
                // DIQQAT: Hozircha localhost ishlamaydi, saytni Vercelga yuklaganingizdan so'ng,
                // 'https://sizning-saytingiz.vercel.app' degan yozuvga almashtirasiz!
                web_app: { url: "https://nextjs-supercell-store.vercel.app" }, // Vaqtinchalik misol
              },
            ],
          ],
        },
      },
    );
  } catch (error) {
    console.error("Xatolik yuz berdi:", error.message);
    bot.sendMessage(
      chatId,
      "Xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.",
    );
  }
});
