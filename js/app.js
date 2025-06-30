// Initialize GSAP with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate elements on scroll
// gsap.utils.toArray("section").forEach((section) => {
//   gsap.from(section.querySelectorAll("h2, h3, p, img, .project-card"), {
//     scrollTrigger: {
//       trigger: section,
//       start: "top 80%",
//       toggleActions: "play none none none",
//     },
//     y: 50,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 0.2,
//     ease: "power2.out",
//   });
// });

// Hero animation
gsap.from(".hero-bg h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.2,
});

gsap.from(".hero-bg a", {
  y: 50,
  opacity: 1,
  duration: 1,
  delay: 0.6,
  stagger: 0.2,
});

// Back to top button
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove("opacity-0", "invisible");
    backToTopBtn.classList.add("opacity-100", "visible");
  } else {
    backToTopBtn.classList.remove("opacity-100", "visible");
    backToTopBtn.classList.add("opacity-0", "invisible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Mobile menu toggle (placeholder - would need implementation)
document.querySelector("nav button").addEventListener("click", function () {
  alert("Mobile menu would open here in a full implementation");
});
