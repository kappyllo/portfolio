const scrollb = Scrollbar.init(document.querySelector("#my_scrollbar"));

document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".text-line");

  lines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("reveal");
    }, index * 200);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".slide_in_image");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide_in_active");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  images.forEach((image) => {
    observer.observe(image);
  });
});

document.querySelectorAll(".nav_links a").forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // Use scrollIntoView for smooth scrolling
    scrollb.scrollIntoView(targetSection, {
      offsetTop: 100,
      alignToTop: true,
    });
  });
});
