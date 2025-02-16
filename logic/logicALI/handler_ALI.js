const mp4 = {
    //AB-AG
    'abacate': ['mp4ALI/abacate.mp4'],
    'abacaxi': ['mp4ALI/abacaxi.mp4'],
    'abiu': ['mp4ALI/abiu.mp4'],
    'abóbora': ['mp4ALI/abóbora.mp4'],
    'abóbora jacarezinho': ['mp4ALI/abóbora_jacarezinho.mp4'],
    'abobrinha': ['mp4ALI/abobrinha.mp4'],
    'abricó': ['mp4ALI/abricó.mp4'],
    'açafrão': ['mp4ALI/açafrão.mp4'],
    'açaí': ['mp4ALI/açaí.mp4'],
    'acarajé': ['mp4ALI/acarajé.mp4'],
    'acelga': ['mp4ALI/acelga.mp4'],
    'acerola': ['mp4ALI/acerola.mp4'],
    'achocolatado': ['mp4ALI/achocolatado.mp4'],
    'açúcar': ['mp4ALI/açúcar.mp4'],
    'açúcar mascavo': ['mp4ALI/açúcar_mascavo.mp4'],
    'adoçante': ['mp4ALI/adoçante.mp4'],
    'agrião': ['mp4ALI/agrião.mp4'],
    'água': ['mp4ALI/água.mp4'],
    'água com gás': ['mp4ALI/água_com_gás.mp4'],
    'água de coco': ['mp4ALI/água_de_coco.mp4'],
 
    //AG-AM
    

    
    

};

let words = Object.keys(mp4);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(words);
let currentIndex = 0;
let score = 0;
let soundEnabled = true;

const mp4Container = document.getElementById('mp4-container');
const mp4Element = document.getElementById('mp4');
const placeholder = document.getElementById('placeholder');
const userInput = document.getElementById('user-input');
const correctSound = document.getElementById('correct-sound');
const scoreElement = document.getElementById('score');
const searchButton = document.getElementById('search-button');
const searchModal = document.getElementById('search-modal');
const searchInput = document.getElementById('search-input');
const searchSubmit = document.getElementById('search-submit');
const searchResult = document.getElementById('search-result');
const closeSearchModal = document.getElementById('close-search-modal');
const soundToggle = document.getElementById('sound-toggle');
const infoButton = document.getElementById('info-button');
const infoModal = document.getElementById('info-modal');
const closeInfoModal = document.getElementById('close-info-modal');

let inactivityTimeout;

function loadNextMp4() {
if (currentIndex < words.length) {
    const currentWord = words[currentIndex];
    const videos = mp4[currentWord];
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    mp4Element.src = randomVideo;
    mp4Element.style.display = 'block';
    placeholder.style.display = 'none';
    userInput.value = '';
    userInput.focus();

    // Revela a palavra correta no console para depuração
    console.log(`Palavra correta para o vídeo atual: ${currentWord}`);

    // Reseta a exibição da resposta
    clearTimeout(inactivityTimeout);
    document.getElementById('answerReveal').style.display = 'none';

    // Inicia o timer para revelar a resposta correta após 10 segundos
    inactivityTimeout = setTimeout(() => {
        document.getElementById('answerReveal').textContent = currentWord;
        document.getElementById('answerReveal').style.display = 'inline-block';
    }, 10000); // alterne o valor de espera para a respota aqui.

    mp4Element.play().catch(error => {
        console.log('Reprodução automática falhou:', error);
    });
} else {
    shuffle(words);
    currentIndex = 0;
    loadNextMp4();
}
}

userInput.addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
const userText = userInput.value.trim().toLowerCase();
if (userText === words[currentIndex]) {
    currentIndex++;
    score++;
    scoreElement.textContent = score;
    if (soundEnabled) {
        correctSound.play();
    }
    loadNextMp4();
    
    // Aumenta a luminosidade do contêiner
    mp4Container.style.boxShadow = '0 0 60px 20px rgba(255, 255, 255, 1)';
    setTimeout(() => {
        mp4Container.style.boxShadow = '0 0 60px 20px rgba(255, 255, 255, 0.8)';
    }, 1000);
} else {
    userInput.value = '';
}
}
});

function attemptAutoPlay() {
    const playPromise = mp4Element.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Reprodução automática bem-sucedida');
        }).catch(error => {
            console.log('Reprodução automática falhou:', error);
        });
    }
}

mp4Element.addEventListener('canplaythrough', attemptAutoPlay);

loadNextMp4();

searchButton.addEventListener('click', () => {
    searchModal.style.display = 'flex';
    searchInput.value = '';
    searchResult.textContent = '';
    searchInput.focus();
});

closeSearchModal.addEventListener('click', () => {
    searchModal.style.display = 'none';
});

searchSubmit.addEventListener('click', () => {
    const searchText = searchInput.value.trim().toLowerCase();
    if (mp4[searchText]) {
        const videos = mp4[searchText];
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];
        searchResult.innerHTML = `<video src="${randomVideo}" controls width="100%"></video>`;
        
        // Aumenta a luminosidade do contêiner
        mp4Container.style.boxShadow = '0 0 60px 20px rgba(255, 255, 255, 1)';
        setTimeout(() => {
            mp4Container.style.boxShadow = '0 0 60px 20px rgba(255, 255, 255, 0.8)';
        }, 1000);
    } else {
        searchResult.textContent = 'Alimento ainda não disponível';
    }
});

searchInput.addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
searchSubmit.click();
}
});

soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
});

infoButton.addEventListener('click', () => {
    infoModal.style.display = 'flex';
});

closeInfoModal.addEventListener('click', () => {
    infoModal.style.display = 'none';
});


//código responsavel por exibir frases aleatorias 
// Lista de frases. Você pode adicionar quantas quiser aqui.
const backgroundWords = [

    "continue tentando!",
    "cada erro é uma lição.",
    "a prática leva à perfeição.",
    "o primeiro traço é importante",
    "observe o primeiro traço!",
    "ouça músicas enquanto joga!",
    "até mesmo a cor dos desenhos é importante!",
    "se atente aos detalhes únicos de cada desenho",
    "Gartic é apenas um jogo, não dê sua vida nisso",
    "digitar devagar é essencial às vezes",
    "seu feedback é importante",
    "as pessoas realmente leem isso?",
    "você pode fazer melhor",
    "a verdadeira vitória vem com o desafio!",
    "você está ficando para trás, que tal digitar mais rápido?",
    "Você está evoluindo",
    "que tal errar menos?",
    "syuz fã de daniewz",
    "seu desempenho é fraco",
    "você continua falhando",
    "quanto mais prática, melhor!",
    "Você está tentando, mas parece inútil",
    "Você está longe de dominar.",
    "pausas são necessárias!",
    "entre no servidor do discord",
    "percepção é necessário",
    "não é sobre velocidade, às vezes",
    "até mesmo o hardware importa",
    "jogar com conexões cabeadas será sempre vantajoso",
    "o mal tem uma falsa vitória sobre o bem",
    "tenha paciência com as pessoas",
    "você também já foi noob",
    "que tal ser menos arrogante?",
    "não perca seu tempo com assuntos frivolos",
    "estrela do sul",
    "uma estrela que brilhou intensamente no meu céu..",
    "compartilhe nosso servidor",
    "convide pessoas para aprender",
    "convide pessoas para praticar",
    "certas coisas são inevitáveis",
    "se coloque no lugar dos outros",
    "tenha empatia",
    "reconheça o esforço dos outros",
    "a humildade precede a honra",
    "seja esperto",
    "seja gentil consigo mesmo (a)",
    "evite assuntos demasiadamente superficiais",
    "se valorize como pessoa",
    "feito por daniewz e denni_0014",
    "digite o mais rapido possível!",
    "pessoas de sucesso definem metas realistas",
    "uma longa viagem começa por um passo",
    "o melhor modo de prever o futuro é criá-lo - Peter Drucker",
    "pratique sua digitação!",
    "seja mais rápido ou desista",
    "erros demais, foco!",
    "não consegue fazer melhor?",
    "tente não errar",
    "você é realmente lento",
    "esse é seu máximo?",
    "mais foco, menos erro!",
    "sites para praticar digitação: 10fastfingers, monkeytype",
    "a vida é simples, nós é que complicamos. - Confúcio",
    "a coragem é a primeira qualidade humana, pois garante as outras. - Aristóteles",
    "sem música, a vida seria um erro",
    "atualizações serão fornecidas através deste site",
    "estar ciente das suas limitações já é estar além delas - hegel",
    "garota, você é interestelar! Nem a estrela mais linda tem a luz que cê tem!",
    "as estrelas apareceram na minha frente quando eu recebi seu abraço!",
    "O jogo está disponível como app para Windows, Android e versão web!",


    





];

// Função para criar um elemento de palavra
function createWordElement(text) {
    const wordElement = document.createElement('div');
    wordElement.textContent = text;
    wordElement.className = 'background-word';

    // Adiciona ao corpo para medir seu tamanho
    document.body.appendChild(wordElement);

    const wordWidth = wordElement.offsetWidth;
    const wordHeight = wordElement.offsetHeight;

    // Remove o elemento após medir
    wordElement.remove();

    // Gera uma posição aleatória dentro da tela
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let x, y;

    // Gera posição aleatória com base nas bordas da tela
    const positionChoice = Math.floor(Math.random() * 8);

    switch (positionChoice) {
        case 0: // Canto superior esquerdo
            x = Math.min(10, windowWidth - wordWidth);
            y = Math.min(10, windowHeight - wordHeight);
            break;
        case 1: // Lateral esquerdo centralizado
            x = Math.min(10, windowWidth - wordWidth);
            y = (windowHeight - wordHeight) / 2;
            break;
        case 2: // Canto superior central
            x = (windowWidth - wordWidth) / 2;
            y = Math.min(10, windowHeight - wordHeight);
            break;
        case 3: // Centralizado
            x = (windowWidth - wordWidth) / 2;
            y = (windowHeight - wordHeight) / 2;
            break;
        case 4: // Lateral direito centralizado
            x = Math.max(windowWidth - wordWidth - 10, 0);
            y = (windowHeight - wordHeight) / 2;
            break;
        case 5: // Canto superior direito
            x = Math.max(windowWidth - wordWidth - 10, 0);
            y = Math.min(10, windowHeight - wordHeight);
            break;
        case 6: // Canto inferior direito
            x = Math.max(windowWidth - wordWidth - 10, 0);
            y = Math.max(windowHeight - wordHeight - 10, 0);
            break;
        case 7: // Canto inferior esquerdo
            x = Math.min(10, windowWidth - wordWidth);
            y = Math.max(windowHeight - wordHeight - 10, 0);
            break;
        default:
            x = 0;
            y = 0;
            break;
    }

    wordElement.style.position = 'absolute';
    wordElement.style.left = `${x}px`;
    wordElement.style.top = `${y}px`;

    // Adiciona a classe para a animação de aparecimento
    document.body.appendChild(wordElement);
    setTimeout(() => {
        wordElement.classList.add('fade-in');
    }, 0);

    // Remove o elemento após a animação de desaparecimento
    setTimeout(() => {
        wordElement.style.opacity = 0;
        setTimeout(() => {
            wordElement.remove();
        }, 2000); // Tempo para garantir que a animação de desaparecimento termine
    }, 10000); // Tempo para mostrar a palavra antes de desaparecer
}

// Inicia a criação de palavras de fundo
function startBackgroundWords() {
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * backgroundWords.length);
        const randomText = backgroundWords[randomIndex];
        createWordElement(randomText);
    }, 19000); // Tempo entre a criação de novas palavras, estava 15000
}

startBackgroundWords(); //versão 0.0.6





