// Seleciona todos os itens do acordeão
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');

    title.addEventListener('click', () => {
        // Fechar todos os outros itens
        accordionItems.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });

        // Alternar o estado do item atual (abrir/fechar)
        item.classList.toggle('active');
    });
});

function toggleMenu() {
    const headerContainer = document.querySelector('.header-container');
    headerContainer.classList.toggle('active');
}

// Fechar o menu ao clicar fora dele ou nos links/botões
document.addEventListener('click', function(event) {
    const headerContainer = document.querySelector('.header-container');
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelectorAll('.header-cta-group a, .header-cta-right button');

    // Se o clique for fora do header-container e não for no menu icon, fechar o menu
    if (!headerContainer.contains(event.target) && !menuIcon.contains(event.target)) {
        headerContainer.classList.remove('active');
    }

    // Fechar o menu ao clicar em qualquer link ou botão dentro do menu
    menuItems.forEach(item => {
        if (item.contains(event.target)) {
            headerContainer.classList.remove('active');
        }
    });
});