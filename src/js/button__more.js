(() => {
  const container = document.querySelector('#whots');
  const textSpan = document.querySelector('#span-more');

  container.addEventListener('click', e => {
    if (e.target.id !== 'more') {
      return;
    }
    textSpan.classList.toggle('display-nan');
  });
})();
