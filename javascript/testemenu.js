
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

