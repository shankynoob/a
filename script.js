const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.anime-card');
const search = document.querySelector('#search');
const emptyState = document.querySelector('#empty-state');
const toast = document.querySelector('.toast');
const detailCards = document.querySelectorAll('[data-detail]');
const siteHeader = document.querySelector('.site-header');
const pageLoader = document.querySelector('.page-loader');
const revealSections = document.querySelectorAll('.reveal-section');
const trendingRail = document.querySelector('#trending-rail');
let activeFilter = 'all';
let toastTimer;
let openPanel = null;
let loaderTimer;

function updateHeader() {
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealSections.forEach((section) => revealObserver.observe(section));

let isDragging = false;
let dragStartX = 0;
let dragScrollLeft = 0;

trendingRail.addEventListener('pointerdown', (event) => {
  isDragging = true;
  dragStartX = event.clientX;
  dragScrollLeft = trendingRail.scrollLeft;
  trendingRail.classList.add('is-dragging');
  trendingRail.setPointerCapture(event.pointerId);
});
trendingRail.addEventListener('pointermove', (event) => {
  if (!isDragging) return;
  trendingRail.scrollLeft = dragScrollLeft - (event.clientX - dragStartX) * 1.15;
});
trendingRail.addEventListener('pointerup', () => {
  isDragging = false;
  trendingRail.classList.remove('is-dragging');
});
trendingRail.addEventListener('pointercancel', () => {
  isDragging = false;
  trendingRail.classList.remove('is-dragging');
});

document.querySelectorAll('.episode-list').forEach((episodeList) => {
  for (let episode = 1; episode <= 12; episode += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `episode${episode === 1 ? ' active' : ''}`;
    button.textContent = episode;
    button.setAttribute('aria-label', `Episode ${episode}`);
    episodeList.appendChild(button);
  }
});

function openDetail(card) {
  openPanel = document.getElementById(card.dataset.detail);
  pageLoader.classList.add('is-loading');
  clearTimeout(loaderTimer);
  loaderTimer = setTimeout(() => {
    pageLoader.classList.remove('is-loading');
    openPanel.hidden = false;
    openPanel.classList.add('is-opening');
    document.body.classList.add('detail-open');
    openPanel.querySelector('.detail-close').focus();
  }, 360);
}

function closeDetail() {
  if (!openPanel) return;
  openPanel.hidden = true;
  openPanel.classList.remove('is-opening');
  document.body.classList.remove('detail-open');
  openPanel = null;
}

detailCards.forEach((card) => card.addEventListener('click', (event) => {
  if (!event.target.closest('.bookmark')) openDetail(card);
}));
detailCards.forEach((card) => card.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openDetail(card);
  }
}));

document.querySelectorAll('.detail-panel').forEach((panel) => panel.addEventListener('click', (event) => {
  if (event.target.matches('[data-close-detail]')) closeDetail();
  if (event.target.matches('.episode')) {
    panel.querySelectorAll('.episode').forEach((episode) => episode.classList.remove('active'));
    event.target.classList.add('active');
  }
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && openPanel) closeDetail();
});

function updateCollection() {
  const query = search.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const matchesFilter = activeFilter === 'all' || card.dataset.genre.includes(activeFilter);
    const matchesSearch = card.dataset.title.toLowerCase().includes(query);
    const isVisible = matchesFilter && matchesSearch;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
}

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    activeFilter = filter.dataset.filter;
    updateCollection();
  });
});

search.addEventListener('input', updateCollection);

document.querySelectorAll('[data-toast]').forEach((button) => {
  button.addEventListener('click', () => {
    toast.textContent = button.dataset.toast;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  });
});
