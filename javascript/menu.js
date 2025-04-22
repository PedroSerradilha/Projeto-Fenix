
  const btnToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul.menu');

  btnToggle.addEventListener('click', () => {
    menu.classList.toggle('ativo');
  });

