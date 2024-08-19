document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slide_in_image_about");

  images.forEach((image) => {
    image.classList.add("slide_in_active_about");
  });
});
