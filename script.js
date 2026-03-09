const header = document.querySelector(".site-header");
const revealTargets = document.querySelectorAll("[data-reveal]");
const navLinks = document.querySelectorAll(".site-nav a");

const updateHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("site-header--scrolled", window.scrollY > 12);
};

const currentPage = (() => {
  const path = window.location.pathname;
  const lastSegment = path.split("/").pop();
  return lastSegment || "index.html";
})();

navLinks.forEach((link) => {
  const href = link.getAttribute("href");

  if (href === currentPage) {
    link.classList.add("is-current");
    link.setAttribute("aria-current", "page");
  }
});

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
