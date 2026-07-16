document.addEventListener('DOMContentLoaded', () => {

  /* ---- mobile menu toggle ---- */
  const burger = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  /* ---- hero equalizer decorative bars ---- */
  const eq = document.getElementById('heroEq');
  if (eq) {
    const bars = 14;
    for (let i = 0; i < bars; i++) {
      const bar = document.createElement('div');
      bar.className = 'eq-bar';
      bar.style.height = (18 + Math.random() * 82) + '%';
      bar.style.opacity = 0.35 + Math.random() * 0.65;
      eq.appendChild(bar);
    }
  }

  /* ---- game carousels ---- */
  document.querySelectorAll('.category-carousel').forEach(carousel => {
    const track = carousel.querySelector('[data-track]');
    const nextBtn = carousel.querySelector('[data-next]');
    const dotsWrap = carousel.querySelector('[data-dots]');
    if (!track) return;

    const cards = track.children.length;
    const visible = Math.max(1, Math.round(track.clientWidth / (cards ? track.scrollWidth / cards : 1)));
    const dotCount = Math.max(1, cards - visible + 1);

    if (dotsWrap) {
      for (let i = 0; i < Math.min(dotCount, cards); i++) {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dotsWrap.appendChild(dot);
      }
    }

    function updateDots() {
      if (!dotsWrap) return;
      const dots = dotsWrap.children;
      const maxScroll = track.scrollWidth - track.clientWidth;
      const ratio = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      const active = Math.round(ratio * (dots.length - 1));
      Array.from(dots).forEach((d, i) => d.classList.toggle('active', i === active));
    }

    track.addEventListener('scroll', () => {
      window.requestAnimationFrame(updateDots);
    }, { passive: true });

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const cardWidth = track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width + 16 : 160;
        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
        track.scrollBy({ left: atEnd ? -track.scrollLeft : cardWidth * 2, behavior: 'smooth' });
      });
    }
  });

});
