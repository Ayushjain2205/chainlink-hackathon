// File: pages/api/telegram.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log(req.body); // Log every incoming message

      const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
      const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

      // Check if the update is a message or a callback query from an inline keyboard
      if (req.body.message) {
        const chatId = req.body.message.chat.id;
        const text = req.body.message.text;

        // Example: sending a message with Yes/No options
        if (text === "/start") {
          const keyboard = [
            [
              { text: "Yesss 🤭", callback_data: "yes" },
              { text: "No 🤬", callback_data: "no" },
              { text: "Maybe 🤷🏻", callback_data: "maybe" },
            ],
          ];
          await sendTelegramMessage(
            chatId,
            "Are you a monster?",
            keyboard,
            TELEGRAM_API
          );
        } else {
          // Echo the received message
          await sendTelegramMessage(
            chatId,
            `You said: ${text}`,
            null,
            TELEGRAM_API
          );
        }
      } else if (req.body.callback_query) {
        // Handle callback query from inline keyboard
        const callbackQuery = req.body.callback_query;
        const data = callbackQuery.data; // 'yes' or 'no'
        const chatId = callbackQuery.message.chat.id;

        // Respond to the callback query
        await axios.post(`${TELEGRAM_API}/answerCallbackQuery`, {
          callback_query_id: callbackQuery.id,
        });

        // Send a follow-up message based on the user's choice
        await sendTelegramMessage(
          chatId,
          `You selected: ${data}`,
          null,
          TELEGRAM_API
        );
      }

      res.status(200).send("OK");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("An error occurred");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Function to send a message with optional inline keyboard
async function sendTelegramMessage(chatId, text, keyboard, TELEGRAM_API) {
  const data = {
    chat_id: chatId,
    text: text,
    ...(keyboard && {
      reply_markup: JSON.stringify({ inline_keyboard: keyboard }),
    }),
  };

  return axios.post(`${TELEGRAM_API}/sendMessage`, data);
}
