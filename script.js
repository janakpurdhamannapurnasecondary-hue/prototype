document.documentElement.classList.add('js');

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll('.section-heading, .project-card, .about-content, .skill-row, .contact h2, .contact .button');
revealTargets.forEach((element) => element.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((element) => observer.observe(element));
