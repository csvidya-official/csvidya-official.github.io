/* ==========================================================================
   CS Vidya — main.js
   Vanilla JS only. Handles: (1) mobile hamburger menu, (2) scroll-triggered
   fade-in via IntersectionObserver. No libraries, no build step.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------- *
   * 1. Mobile hamburger menu
   *    Toggles the green dropdown and keeps aria-expanded in sync.
   * ---------------------------------------------------------------- */
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    var setMenu = function (open) {
      links.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      setMenu(!isOpen);
    });

    // Close the menu after tapping any link (so the dropdown doesn't linger).
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });

    // Close on Escape for keyboard users.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* ---------------------------------------------------------------- *
   * 2. Scroll-triggered fade-in
   *    Each .reveal section animates opacity 0->1 / translateY 24px->0
   *    once when it scrolls into view. Falls back to visible if the
   *    browser lacks IntersectionObserver or prefers reduced motion.
   * ---------------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  var prefersReduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || prefersReduced) {
    // No observer (or motion suppressed): just show everything.
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // animate once, then stop watching
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px", // trigger slightly before fully in view
    }
  );

  revealEls.forEach(function (el) { observer.observe(el); });
})();
