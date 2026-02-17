const revealTargets = document.querySelectorAll('.service-card, .testimonial, .about-grid, .hero-content, .hero-image');

revealTargets.forEach((item) => item.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((item) => observer.observe(item));
