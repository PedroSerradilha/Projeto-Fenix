document.addEventListener("DOMContentLoaded", function () {
    console.log("Site carregado com sucesso!");
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("click", function() {
        this.classList.toggle("active");
        const menu = this.querySelector(".dropdown-menu");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Captura todos os links do menu que possuem a classe "scroll-link"
    const scrollLinks = document.querySelectorAll(".scroll-link");

    scrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o comportamento padrão de mudar de página

            const targetId = this.getAttribute("href"); // Obtém o ID do link
            const targetElement = document.querySelector(targetId); // Encontra a seção correspondente

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Ajuste para que o cabeçalho não cubra o conteúdo
                    behavior: "smooth" // Animação suave
                });
            }
        });
    });
});

