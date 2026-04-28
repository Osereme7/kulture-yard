// Kulture Yard - main.js
// Sticky nav scroll state, mobile menu toggle, scroll reveal.

(function () {
  'use strict';

  const nav = document.querySelector('.site-nav');
  const navToggle = document.querySelector('.nav-toggle');
  const body = document.body;

  // Scroll-state toggle on nav
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 32) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      body.classList.toggle('nav-open');
      const expanded = body.classList.contains('nav-open');
      navToggle.setAttribute('aria-expanded', String(expanded));
    });

    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => {
        body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal via IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  // Year stamp in footer
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
