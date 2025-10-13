(function () {
  const toggle  = document.getElementById('stgToggle');
  const panel   = document.getElementById('stgPanel');
  const overlay = document.getElementById('stgOverlay');
  const links   = panel.querySelectorAll('.stg-link');

  const open = () => {
    panel.classList.add('open');
    overlay.classList.add('show');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    panel.classList.remove('open');
    overlay.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    expanded ? close() : open();
  });

  overlay.addEventListener('click', close);

  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  links.forEach(a => a.addEventListener('click', close));
})();
