import { getRandomColor } from "./randomColor.js";
import { setupPagination } from "./pagination.js";

document.addEventListener("DOMContentLoaded", async () => {
  const loadingElement = document.getElementById("loading");
  const messagesElement = document.getElementById("messages");

  try {
    const response = await fetch("/api/messages");
    const messages = await response.json();

    loadingElement.style.display = "none";
    messagesElement.style.display = "block";

    messages
      .slice()
      .reverse()
      .forEach((message, index) => {
        const messageCard = document.createElement("div");
        messageCard.className = "message-card";

        const userElement = document.createElement("h3");
        userElement.className = "message-user";
        userElement.id = `user-${index}`;
        userElement.textContent = message.user;

        const countryElement = document.createElement("img");
        countryElement.className = "message-country";
        countryElement.src = `https://flagcdn.com/16x12/${message.country.toLowerCase()}.png`;
        countryElement.alt = message.country;

        const userContainer = document.createElement("div");
        userContainer.className = "user-container";
        userContainer.appendChild(countryElement);
        userContainer.appendChild(userElement);

        const textElement = document.createElement("p");
        textElement.textContent = message.text;

        const dateElement = document.createElement("p");
        dateElement.className = "message-date";
        dateElement.textContent = new Date(message.added)
          .toLocaleDateString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(",", "");

        messageCard.appendChild(userContainer);
        messageCard.appendChild(textElement);
        messageCard.appendChild(dateElement);

        messagesElement.appendChild(messageCard);
      });

    document.querySelectorAll(".message-user").forEach((user) => {
      user.style.color = getRandomColor();
    });

    setupPagination(messages, 4);
  } catch (error) {
    loadingElement.textContent = "Failed to load messages.";
  }
});
