(() => {
  const menuBtnRef = document.querySelector('.wraper');
  const mobileMenuRef = document.querySelector('.main__button');
  mobileMenuRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('display-nan');
  });
})();
