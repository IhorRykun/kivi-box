(() => {
  const menuBtnRef = document.querySelector('.wraper');
  const mobileMenuRef = document.querySelector('.main__button');
  const btnClose = document.querySelector('.button__close');
  mobileMenuRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('display-nan');
  });
  btnClose.addEventListener('click', () => {
    menuBtnRef.classList.toggle('display-nan');
  });
})();
