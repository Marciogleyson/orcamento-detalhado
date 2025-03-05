let slideIndex = 0; // Índice do slide atual

// Função para mover os slides
function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slideIndex += step;

    // Garantir que o índice do slide não ultrapasse os limites
    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Volta para o primeiro slide
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1; // Vai para o último slide
    }

    const newTransformValue = -slideIndex * 100; // Calcula o valor de 'translateX' para mover os slides
    document.querySelector('.slides').style.transform = `translateX(${newTransformValue}%)`;
}

// Automatizar o movimento do slider a cada 5 segundos
setInterval(() => {
    moveSlide(1); // Move para o próximo slide
}, 5000); // A cada 5 segundos, muda para o próximo slide
