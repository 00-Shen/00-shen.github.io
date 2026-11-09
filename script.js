// Adapted from pms01260.github.io (with the author's permission): mobile menu, active-section highlight, scroll progress.
const button = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
const links = [...document.querySelectorAll('#site-nav a[href^="#"]')];
const sectionLinks = [...links, ...document.querySelectorAll('.side-nav a')];

button?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});

links.forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    sectionLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-30% 0px -60%', threshold: 0 });

document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));

const progress = document.querySelector('.side-track span');
let progressQueued = false;
function updateProgress() {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.height = `${max > 0 ? Math.min(scrollY / max, 1) * 100 : 0}%`;
  progressQueued = false;
}
addEventListener('scroll', () => {
  if (progressQueued) return;
  progressQueued = true;
  requestAnimationFrame(updateProgress);
}, { passive: true });
addEventListener('resize', updateProgress);
updateProgress();

document.getElementById('year').textContent = new Date().getFullYear();
