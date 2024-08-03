document.addEventListener("DOMContentLoaded", () => {
  // Get all text lines
  const lines = document.querySelectorAll(".text-line");

  // Add the 'reveal' class with a staggered delay
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("reveal");
    }, index * 200); // Delay each line by 200ms
  });
});
