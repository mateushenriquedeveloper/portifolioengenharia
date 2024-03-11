// Função para passar as imagens do primeiro carrossel automaticamente
const firstCarousel = document.getElementById('carousel1');
let scrollAmount = 0;
let scrollInterval;

function autoScroll() {
    // Incrementa a quantidade de rolagem
    scrollAmount++;

    // Define a posição de rolagem do carrossel
    firstCarousel.scrollLeft = scrollAmount;

    // Verifica se atingiu o final do carrossel e reseta a rolagem
    if (scrollAmount >= (firstCarousel.scrollWidth - firstCarousel.clientWidth)) {
        scrollAmount = 0;
    }
}

// Iniciar o auto-scroll apenas quando a página estiver totalmente carregada
window.addEventListener('load', () => {
    // Define o intervalo de rotação automática a cada 2 segundos
    scrollInterval = setInterval(autoScroll, 2000);
});

// Parar o auto-scroll quando o usuário interagir com o carrossel
firstCarousel.addEventListener('mouseenter', () => {
    clearInterval(scrollInterval);
});

// Retomar o auto-scroll quando o usuário não estiver mais interagindo com o carrossel
firstCarousel.addEventListener('mouseleave', () => {
    scrollInterval = setInterval(autoScroll, 2000);
});

// Funções para mover o carrossel para a esquerda e direita
function moveCarouselLeft(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollLeft -= carousel.offsetWidth;
}

function moveCarouselRight(carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollLeft += carousel.offsetWidth;
}

// Implementação do efeito de realce nos ícones a cada 2 segundos
const icons = document.querySelectorAll('.icones-laterais img');
let highlightedIndex = 0;

setInterval(() => {
    icons[highlightedIndex].style.border = '2px solid red'; // Realce do ícone atual
    highlightedIndex = (highlightedIndex + 1) % icons.length;
    icons.forEach((icon, index) => {
        if (index !== highlightedIndex) {
            icon.style.border = 'none'; // Remove o realce dos outros ícones
        }
    });
}, 2000); // Altera o ícone realçado a cada 2 segundos

// Função para abrir e fechar o menu lateral
function toggleMenu() {
    var menu = document.getElementById("menu-lateral");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
// Selecionar o carrossel e as imagens
const carousel1 = document.getElementById('carousel1');
const images1 = carousel1.getElementsByTagName('img');
let currentIndex1 = 0;

// Função para mostrar a próxima imagem no carrossel
function showNextImage1() {
    images1[currentIndex1].style.display = 'none';
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    images1[currentIndex1].style.display = 'block';
}

// Mostrar a próxima imagem a cada 2 segundos
setInterval(showNextImage1, 2000);
