
let counter = 0;
const carousel = document.getElementById('carousel');
const images = carousel.getElementsByTagName('img');
setInterval(() => {
    images[counter].style.display = 'none';
    counter = (counter + 1) % images.length;
    images[counter].style.display = 'block';
}, 3000); // Altera a imagem a cada 3 segundos
