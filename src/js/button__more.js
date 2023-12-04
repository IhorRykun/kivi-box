(() => {
  const container = document.querySelector('.whats__button--leptop');
  const textSpan = document.querySelector('.button-more--span');

  container.addEventListener('click', addMore);

  function addMore() {
    const addClass = textSpan.classList.toggle('display-nan');
    console.log(addClass);
    return addClass;
  }
})();
