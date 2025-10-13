// ===== Scroll contrôlé, séparé du CSS =====

// Hauteur du header sticky (ajuste si besoin)
const HEADER_OFFSET = 80;

// Durée de l’animation en millisecondes (plus grand = plus lent)
const DURATION = 900; // ex: 900ms au lieu du smooth natif trop rapide

// Easing pour un mouvement agréable
function easeInOutCubic(t){
  return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2;
}

function smoothScrollTo(targetY, duration){
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime = null;

  function step(timestamp){
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (elapsed < duration) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

// Clic sur la flèche
document.addEventListener('DOMContentLoaded', function(){
  const link = document.querySelector('.scroll-down');
  const target = document.getElementById('apres-hero');
  if (!link || !target) return;

  link.addEventListener('click', function(e){
    e.preventDefault();
    const rect = target.getBoundingClientRect();
    const y = rect.top + window.pageYOffset - HEADER_OFFSET;
    smoothScrollTo(y, DURATION);
  });
});
