
    // Exemplo de menu funcional usando JavaScript
    const menuItems = document.querySelectorAll('nav ul li');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Implemente a lógica para lidar com os cliques nos itens do menu
            console.log(`Você clicou em: ${item.textContent}`);
        });
    });

    // Implementação do carrossel de imagens
    let counter = 0;
    const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    setInterval(() => {
        images[counter].style.display = 'none';
        counter = (counter + 1) % images.length;
        images[counter].style.display = 'block';
    }, 3000); // Altera a imagem a cada 3 segundos
