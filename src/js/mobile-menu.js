(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuHome = document.querySelector('.js-close-home');
  const closeMenuAbout = document.querySelector('.js-close-about');
  const closeMenuHowitsmade = document.querySelector('.js-close-howitsmade');
  const closeMenuProduvts = document.querySelector('.js-close-produvts');
  const closeMenuContact = document.querySelector('.js-close-contact');
  const closeMenuBuynow = document.querySelector('.js-close-buynow');
  const buyHide = document.querySelector('.js-buy-hide');
  const openMenuHide = document.querySelector('.js-open-menu-hide');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    buyHide.classList.toggle('is-open-btn');
    openMenuHide.classList.toggle('is-open-btn');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuHome.addEventListener('click', toggleMenu);
  closeMenuAbout.addEventListener('click', toggleMenu);
  closeMenuHowitsmade.addEventListener('click', toggleMenu);
  closeMenuProduvts.addEventListener('click', toggleMenu);
  closeMenuContact.addEventListener('click', toggleMenu);
  closeMenuBuynow.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    buyHide.classList.remove('is-open-btn');
    openMenuHide.classList.remove('is-open-btn');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
