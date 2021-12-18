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
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-map-modal-open]'),
      closeModalBtn: document.querySelector('[data-map-modal-close]'),
      modal: document.querySelector('[data-map-modal]'),
      backdrop: document.querySelector('[data-map-packdrop]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle('modal-open')
      // refs.modal.classList.toggle('active');
      refs.modal.classList.toggle('active');
      refs.backdrop.classList.toggle('active');
    }
})();
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-franchise-open]'),
      closeModalBtn: document.querySelector('[data-modal-franchise-close]'),
      modal: document.querySelector('[data-modal-franchise]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('modal-open')
    }
  })();
(() => {
    const refs = {
      openModalBtn: document.querySelector('[hero-milk-modal-open]'),
      closeModalBtn: document.querySelector('[hero-milk-modal-close]'),
      modal: document.querySelector('[hero-milk-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      document.body.classList.toggle('modal-open')
    }
})();
  (() => {
  const refs = {
    openModalBtn: document.querySelector('[about-modal-open]'),
    closeModalBtn: document.querySelector('[about-modal-close]'),
    modal: document.querySelector('[about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();
