document.addEventListener("DOMContentLoaded", () => {
  const messagesPerPage = 4; // Cambiar a 4 mensajes por página
  let currentPage = 1;
  const messages = Array.from(document.querySelectorAll(".message-card"));
  const totalPages = Math.ceil(messages.length / messagesPerPage);

  function showPage(page) {
    messages.forEach((message, index) => {
      message.style.display =
        index >= (page - 1) * messagesPerPage && index < page * messagesPerPage
          ? "block"
          : "none";
    });
    updatePaginationButtons(page);
  }

  function updatePaginationButtons(page) {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  showPage(currentPage);
});
