document.addEventListener('DOMContentLoaded', function () {
    // Inicializa a biblioteca de animações ao rolar a página (AOS)
    AOS.init({
        duration: 800, // Duração das animações em milissegundos
        once: true,    // Executa a animação apenas uma vez por página
        offset: 100
    });

    // Atualiza o ano no rodapé automaticamente
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Rolagem suave para navegação dos links internos
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});