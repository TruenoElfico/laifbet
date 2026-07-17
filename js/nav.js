  const topbar = document.getElementById('topbar');
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  const closeMenu = () => {
    topbar.classList.remove('open');
    burgerBtn.setAttribute('aria-expanded', 'false');
  };

  burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = topbar.classList.toggle('open');
    burgerBtn.setAttribute('aria-expanded', isOpen);
  });
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('click', (e) => {
    if (topbar.classList.contains('open') && !mobileNav.contains(e.target)) {
      closeMenu();
    }
  });

  const toggleScrolled = () => topbar.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', toggleScrolled, { passive: true });
  toggleScrolled();

  const setSpacing = () => { document.body.style.paddingTop = topbar.offsetHeight + 'px'; };
  setSpacing();
  window.addEventListener('resize', setSpacing);
