(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;
    const coordsModified = coords/2

    if (scrolled > coordsModified) {
      goTopBtn.classList.add('back_to_top-show');
      
    }
    if (scrolled < coordsModified) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    window.scrollTo(0, 0);
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
