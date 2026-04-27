// Kulture Yard — menu.js
// Category tab filter + free-text search across menu items.

(function () {
  'use strict';

  const tabs = document.querySelectorAll('.menu-tab');
  const sections = document.querySelectorAll('.menu-section');
  const items = document.querySelectorAll('.menu-item');
  const searchInput = document.querySelector('#menu-search-input');
  const empty = document.querySelector('.menu-empty');

  const state = { category: 'all', query: '' };

  const applyFilters = () => {
    let visibleCount = 0;

    sections.forEach((section) => {
      const cat = section.dataset.category;
      const sectionItems = section.querySelectorAll('.menu-item');
      let sectionHasMatch = false;

      sectionItems.forEach((item) => {
        const matchesCategory = state.category === 'all' || cat === state.category;
        const text = (item.textContent || '').toLowerCase();
        const matchesQuery = state.query === '' || text.includes(state.query);
        const visible = matchesCategory && matchesQuery;

        item.classList.toggle('hidden', !visible);
        if (visible) {
          sectionHasMatch = true;
          visibleCount += 1;
        }
      });

      const sectionVisible = sectionHasMatch && (state.category === 'all' || cat === state.category);
      section.classList.toggle('hidden', !sectionVisible);
    });

    if (empty) empty.style.display = visibleCount === 0 ? 'block' : 'none';
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      state.category = tab.dataset.category;
      applyFilters();

      // smooth scroll to first matching section
      if (state.category !== 'all') {
        const target = document.querySelector(`.menu-section[data-category="${state.category}"]`);
        if (target) {
          const offset = 160;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  if (searchInput) {
    let timer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.query = e.target.value.trim().toLowerCase();
        applyFilters();
      }, 120);
    });
  }
})();
