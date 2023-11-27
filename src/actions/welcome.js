const axios = require("axios");

const botToken = "6666372600:AAGdpxrOwVwUJjDZ2tFft5m3rFypIr1en8M"; // Hardcoded bot token

function sendTelegramMessage(userId, message) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const data = {
    chat_id: userId,
    text: message,
  };

  return axios
    .post(url, data)
    .then((response) => response.data)
    .catch((error) => console.error("Error sending message:", error));
}

module.exports = sendTelegramMessage;
