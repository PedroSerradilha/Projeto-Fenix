
  let slideAtual = 0;
  const slides = document.querySelectorAll('.slide');
  const bolinhas = document.querySelectorAll('.bolinha');

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('ativo');
      bolinhas[i].classList.remove('ativa');
    });

    slides[index].classList.add('ativo');
    bolinhas[index].classList.add('ativa');
    slideAtual = index;
  }

  function proximoSlide() {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);
  }

  function mudarSlide(index) {
    mostrarSlide(index);
  }

  setInterval(proximoSlide, 5000); // troca automática a cada 5 segundos


