const institutionHeader = document.querySelector('.topbar');
new ResizeObserver(() => {
  document.documentElement.style.setProperty('--institution-header-height', `${institutionHeader.offsetHeight}px`);
}).observe(institutionHeader);
