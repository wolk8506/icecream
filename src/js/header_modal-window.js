(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-header-modal-open]'),
    closeModalBtn: document.querySelector('[data-header-modal-close]'),
    closeModalBtnMobile: document.querySelector('[data-header-modal-close-mobile]'),
    modal: document.querySelector('[data-header-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtnMobile.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
