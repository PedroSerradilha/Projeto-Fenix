
  const topBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
  });
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

