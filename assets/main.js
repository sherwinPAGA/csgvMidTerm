document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll("a.nav-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Case studies carousel auto-play
  const caseStudiesCarousel = document.querySelector("#caseStudiesCarousel");
  if (caseStudiesCarousel) {
    new bootstrap.Carousel(caseStudiesCarousel, {
      interval: 3000,
      ride: true,
    });
  }
});
