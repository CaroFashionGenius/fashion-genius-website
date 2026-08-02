const header = document.querySelector('[data-header]');
const mobileToggle = document.querySelector('[data-mobile-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const megaTrigger = document.querySelector('[data-mega-trigger]');
const navItem = megaTrigger?.closest('.nav-item');

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 30);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

mobileToggle?.addEventListener('click', () => {
  const open = mobileNav?.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', String(Boolean(open)));
  mobileToggle.textContent = open ? '×' : '☰';
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    if (mobileToggle) mobileToggle.textContent = '☰';
  });
});

megaTrigger?.addEventListener('click', () => {
  const open = navItem?.classList.toggle('open');
  megaTrigger.setAttribute('aria-expanded', String(Boolean(open)));
});
navItem?.addEventListener('mouseenter', () => navItem.classList.add('open'));
navItem?.addEventListener('mouseleave', () => navItem.classList.remove('open'));

document.addEventListener('click', (event) => {
  if (navItem && !navItem.contains(event.target)) {
    navItem.classList.remove('open');
    megaTrigger?.setAttribute('aria-expanded', 'false');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
