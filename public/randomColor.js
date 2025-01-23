function getRandomColor() {
  const colors = [
    "#FF5733", // Red
    "#FFBD33", // Yellow
    "#75FF33", // Green
    "#33FF57", // Light Green
    "#33FFBD", // Cyan
    "#3375FF", // Blue
    "#7533FF", // Purple
    "#FF33BD", // Pink
    "#FF33A6", // Magenta
    "#FF3380", // Light Pink
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".message-user").forEach((user) => {
    user.style.color = getRandomColor();
  });
});
