(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-product-modal-open]'),
    closeModalBtn: document.querySelector('[data-product-modal-close]'),
    modal: document.querySelector('[data-product-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
  
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-product-beige-modal-open]'),
      closeModalBtn: document.querySelector('[data-product-beige-modal-close]'),
      modal: document.querySelector('[data-product-beige-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle('modal-open')
      refs.modal.classList.toggle('is-hidden-beige');
    }
})();

(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-product-green-modal-open]'),
      closeModalBtn: document.querySelector('[data-product-green-modal-close]'),
      modal: document.querySelector('[data-product-green-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle('modal-open')
      refs.modal.classList.toggle('is-hidden-green');
    }
})();


