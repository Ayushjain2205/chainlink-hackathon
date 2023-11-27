const axios = require("axios");

function sendTelegramMessage(chatId, message, botToken) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const data = {
    chat_id: chatId,
    text: message,
  };

  return axios
    .post(url, data)
    .then((response) => response.data)
    .catch((error) => console.error("Error sending message:", error));
}

// Example usage
const botToken = "6666372600:AAGdpxrOwVwUJjDZ2tFft5m3rFypIr1en8M"; // Replace with your actual bot token
const userChatId = "1291727504"; // Replace with the actual user ID
const message = "Hello from your web app!";

sendTelegramMessage(userChatId, message, botToken);
