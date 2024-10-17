// Seleção dos elementos
const downloadsBtn = document.getElementById('downloadsBtn');
const popup = document.getElementById('popupDownloads');
const closeBtn = document.querySelector('.close-btn');

// Abrir o pop-up ao clicar no botão "Downloads"
downloadsBtn.addEventListener('click', () => {
    popup.style.display = 'flex'; // Torna o pop-up visível
});

// Fechar o pop-up ao clicar no 'x'
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fechar o pop-up se o usuário clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

