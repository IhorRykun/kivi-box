const more = document.querySelectorAll('.whats__button--leptop');
const textSpan = document.querySelectorAll('.button-more--span');

more.addEventListener('click', () => {
  textSpan.classList.toggle('veritatis-nan');
});
