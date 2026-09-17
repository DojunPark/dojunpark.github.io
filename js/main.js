'use strict';

// Progressive enhancement: without JavaScript, every publication remains visible.
const publicationFilters = document.querySelector('.publication-filters');
if (publicationFilters) {
  const buttons = [...publicationFilters.querySelectorAll('button')];
  const publications = [...document.querySelectorAll('.publication-entry')];
  const status = document.getElementById('publication-count');
  publicationFilters.hidden = false;
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.publicationFilter;
      let count = 0;
      publications.forEach((publication) => {
        const visible = selected === 'all' || publication.dataset.publicationType === selected;
        publication.hidden = !visible;
        if (visible) count += 1;
      });
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      status.textContent = `${count} ${selected === 'all' ? 'entries' : selected === 'preprint' ? 'preprints' : 'published papers'} · Publication status as listed in my CV`;
    });
  });
}

// Keep the copyright current without making the content depend on JavaScript.
const year = document.getElementById('current-year');
if (year) year.textContent = new Date().getFullYear();

// Mark the section currently in view for both visual and assistive navigation.
const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navigationLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }
  }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
}
