const menuBtnRef = document.querySelector('.modal__button');
const mobileMenuRef = document.querySelector('.wraper');

(() => {
  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('veritatis-nan');
  });
})();
