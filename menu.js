(function () {
  const btn = document.getElementById('stgToggle');
  const panel = document.getElementById('stgPanel');
  const overlay = document.getElementById('stgOverlay');

  function openMenu(state) {
    const open = state ?? !panel.classList.contains('open');
    panel.classList.toggle('open', open);
    overlay.classList.toggle('show', open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', () => openMenu());
  overlay.addEventListener('click', () => openMenu(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') openMenu(false);
  });
  panel.addEventListener('click', (e) => {
    if (e.target.matches('.stg-link')) openMenu(false);
  });
})();
