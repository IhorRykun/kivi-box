(() => {
  const menuBtnRef = document.querySelector('.wraper');
  const mobileMenuRef = document.querySelector('#modal');
  const btnClose = document.querySelector('#close');
  const bodyHtml = document.querySelector('.body');

  bodyHtml.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.id !== 'modal') {
      return;
    }
    menuBtnRef.classList.toggle('display-nan');
  });
  menuBtnRef.addEventListener('click', e => {
    if (e.target.id !== 'close') {
      return;
    }
    if (e.key === 'ESCAPE') {
      menuBtnRef.classList.toggle('display-nan');
    }

    menuBtnRef.classList.toggle('display-nan');
  });

  bodyHtml.addEventListener('keydown', e => {
    e.preventDefault();
    if (e.key !== 'Escape') {
      return;
    }
    menuBtnRef.classList.add('display-nan');
  });
})();
