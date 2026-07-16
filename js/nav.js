  const topbar = document.getElementById('topbar');
  const burgerBtn = document.getElementById('burgerBtn');
  burgerBtn.addEventListener('click', () => {
    const isOpen = topbar.classList.toggle('open');
    burgerBtn.setAttribute('aria-expanded', isOpen);
  });
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
      topbar.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    });
  });
