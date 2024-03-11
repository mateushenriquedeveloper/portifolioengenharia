     // Exemplo de menu funcional usando JavaScript
        /* ... */
        // Implementação do carrossel de imagens
        let counter = 0;
        const carousel = document.getElementById('carousel');
        const images = carousel.getElementsByTagName('img');
        setInterval(() => {
            images[counter].style.display = 'none';
            counter = (counter + 1) % images.length;
            images[counter].style.display = 'block';
        }, 2000); // Altera a imagem a cada 2 segundos
       
        function unmuteVideo() {
            var video = document.getElementById('myVideo');
            video.muted = false;
        }