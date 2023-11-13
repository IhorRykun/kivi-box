const more = document.querySelector('.whats__button--leptop');
const textSpan = document.querySelector('.button-more--span');

more.addEventListener('click', btnMore);

function btnMore() {
  const targetElement = textSpan.classList.toggle('veritatis-nan');
  return targetElement;
}
