document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar a exibição de um spoiler
    function toggleSpoiler(button) {
        var content = button.nextElementSibling;

        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    }

    // Adiciona evento de clique para cada botão de spoiler
    var spoilers = document.querySelectorAll('.spoiler-btn');
    spoilers.forEach(function(button) {
        button.addEventListener('click', function() {
            toggleSpoiler(this);
        });
    });

    // Função para abrir todos os spoilers
    function openAllSpoilers() {
        var spoilersContent = document.querySelectorAll('.spoiler-content');
        spoilersContent.forEach(function(spoiler) {
            spoiler.style.display = 'block';
        });
    }

    // Função para fechar todos os spoilers
    function closeAllSpoilers() {
        var spoilersContent = document.querySelectorAll('.spoiler-content');
        spoilersContent.forEach(function(spoiler) {
            spoiler.style.display = 'none';
        });
    }

    // Adiciona eventos de clique para os botões "Abrir Todos" e "Fechar Todos"
    const openAllButton = document.getElementById('open-all');
    const closeAllButton = document.getElementById('close-all');
    
    if (openAllButton) {
        openAllButton.addEventListener('click', openAllSpoilers);
    }

    if (closeAllButton) {
        closeAllButton.addEventListener('click', closeAllSpoilers);
    }

    // Adiciona evento de clique para o botão "Voltar ao Topo"
    const scrollToTopButton = document.getElementById('scroll-to-top');
    
    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

