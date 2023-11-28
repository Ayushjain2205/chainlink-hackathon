// File: pages/api/telegram.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log(req.body); // Log every incoming message

      const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Use environment variable for the bot token
      const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

      if (req.body.message && req.body.message.text) {
        const chatId = req.body.message.chat.id;
        const text = req.body.message.text;

        await axios.post(`${TELEGRAM_API}/sendMessage`, {
          chat_id: chatId,
          text: `You said: ${text}`,
        });
      }

      res.status(200).send("OK");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("An error occurred");
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
