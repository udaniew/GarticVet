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

/* window.alert('Aviso: este site está em desenvolvimento. Para uma experiência otimizada, recomendamos acessá-lo em um computador. Se estiver em um dispositivo móvel, baixe o aplicativo Android na seção "Downloads" ou use o modo desktop. Note que a usabilidade pode ser reduzida em telas menores. O site possui uma senha de acesso. Para obtê-la, envie uma solicitação no Discord (usuário: daniewz), e eu lhe explicarei como acessar. - By Daniewz');

// Defina a senha correta
const correctPassword = "K3pS#8dG_BpL4$eJ@9N";

function checkPassword() {
    const userPassword = document.getElementById("passwordInput").value;
    if (userPassword === correctPassword) {
        document.getElementById("passwordPopup").style.display = "none";
    } else {
        alert("Senha incorreta! Tente novamente.");
    }
}

*/