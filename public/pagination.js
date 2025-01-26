function setupPagination(messages, messagesPerPage) {
  let currentPage = 1;
  const totalPages = Math.ceil(messages.length / messagesPerPage);

  function showPage(page) {
    const start = (page - 1) * messagesPerPage;
    const end = start + messagesPerPage;
    document.querySelectorAll(".message-card").forEach((message, index) => {
      message.style.display = index >= start && index < end ? "block" : "none";
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
}

export { setupPagination };