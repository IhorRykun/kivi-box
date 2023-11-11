const more = document.querySelector('.whats__button--leptop');
const textSpan = document.querySelector('.button-more--span');

more.addEventListener('click', () => {
  textSpan.classList.toggle('veritatis-nan');
  console.log('more clicked');
});
