// !  подія по кліку
document.addEventListener('click', function (e) {
  const targetElement = e.target;
  if (targetElement.closest('[data-ripple')) {
    // !  Константи
    const button = targetElement.closest('[data-ripple');
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // !  Формування елементу
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${
      e.pageX - (button.getBoundingClientRect().left + scrollX) - radius
    }px`;
    ripple.style.top = `${
      e.pageY - (button.getBoundingClientRect().top + scrollY) - radius
    }px`;
    ripple.classList.add('ripple');

    // !  Добавлення елементу
    button.appendChild(ripple);

    // !  Отримання часу дії анімації

    const timeOut = getAnimationDuration(ripple);

    // !  Видалення елементу

    setTimeout(() => {
      ripple ? ripple.remove() : null;
    }, timeOut);

    // ! Функція часу дії
    function getAnimationDuration() {
      const aDuration = window.getComputedStyle(ripple).animationDuration;
      return aDuration.includes('ms')
        ? aDuration.replace('ms', '')
        : aDuration.replace('s', '') * 1000;
    }
  }
});
// !  подія по кліку
document.addEventListener('click', function (e) {
  const targetElement = e.target;
  if (targetElement.closest('[data-ripple')) {
    // !  Константи
    const button = targetElement.closest('[data-ripple');
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    // !  Формування елементу
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${
      e.pageX - (button.getBoundingClientRect().left + scrollX) - radius
    }px`;
    ripple.style.top = `${
      e.pageY - (button.getBoundingClientRect().top + scrollY) - radius
    }px`;
    ripple.classList.add('ripple');

    // !  Добавлення елементу
    button.appendChild(ripple);

    // !  Отримання часу дії анімації

    const timeOut = getAnimationDuration(ripple);

    // !  Видалення елементу

    setTimeout(() => {
      ripple ? ripple.remove() : null;
    }, timeOut);

    // ! Функція часу дії
    function getAnimationDuration() {
      const aDuration = window.getComputedStyle(ripple).animationDuration;
      return aDuration.includes('ms')
        ? aDuration.replace('ms', '')
        : aDuration.replace('s', '') * 1000;
    }
  }
});
