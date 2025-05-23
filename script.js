// Função para alternar a visibilidade de um elemento
function toggleVisibility(buttonId, messageId) {
  const button = document.getElementById(buttonId);
  const message = document.getElementById(messageId);

  button.addEventListener('click', function() {
    // Alterna a visibilidade
    if (message.style.display === 'none') {
      message.style.display = 'block'; // Exibe a mensagem
    } else {
      message.style.display = 'none'; // Oculta a mensagem
    }
  });
}

// Chama a função para o primeiro botão
toggleVisibility('clickHere1', 'message1');

// Chama a função para o segundo botão
toggleVisibility('clickHere2', 'message2');

toggleVisibility('clickHere3', 'message3');

toggleVisibility('clickHere4', 'message4');

toggleVisibility('clickHere5', 'message5');

toggleVisibility('clickHere6', 'message6');

toggleVisibility('clickHere7', 'message7');

toggleVisibility('clickHere8', 'message8');

toggleVisibility('clickHere9', 'message9');

toggleVisibility('clickHere10', 'message10');

toggleVisibility('clickHere11', 'message11');




// Contagem regressiva
const targetDate = new Date('2025-10-15 00:00:00').getTime();
const countdownEl = document.getElementById('countdown');

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Efeito de brilho nos últimos segundos
  if (distance <= 10000) {  // Últimos 10 segundos
    countdownEl.classList.add('glowing');
  }

  // Quando a contagem regressiva acabar
  if (distance < 0) {
    countdownEl.innerText = "Chegou o grande dia!";
    countdownEl.classList.remove('glowing');
    countdownEl.classList.add('complete');
  }
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const heartContainer = document.body;  // Vai adicionar os corações no corpo da página
    const heartCount = 50;  // Número de corações que irão cair

    // Função para criar e adicionar corações
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';  // Aqui você pode usar o emoji do coração ou qualquer outro ícone

        // Definir uma posição aleatória no eixo X
        const randomX = Math.random() * window.innerWidth;
        heart.style.left = `${randomX}px`;

        // Gerar um valor aleatório para o tempo de animação de cada coração
        heart.style.setProperty('--i', Math.random() * 5);

        // Adicionar o coração à página
        heartContainer.appendChild(heart);

        // Remover o coração após ele desaparecer
        setTimeout(() => {
            heart.remove();
        }, 7000);  // Tempo da animação (7 segundos)
    }

    // Criar os corações em intervalos
    setInterval(createHeart, 300);  // Novo coração a cada 300 milissegundos
});

  // Música ao clicar na imagem
  const img = document.getElementById('musicImage');
  const audio = document.getElementById('audioPlayer');

  img.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  });

  const dataReferencia = new Date("2025-05-23T10:10:00");

    function atualizarContagem() {
      const agora = new Date();
      let diferencaMs = agora - dataReferencia;

      // Se ainda não passou da data, mostra contagem negativa
      const sinal = diferencaMs < 0 ? "-" : "";

      diferencaMs = Math.abs(diferencaMs);

      const segundos = Math.floor((diferencaMs / 1000) % 60);
      const minutos = Math.floor((diferencaMs / (1000 * 60)) % 60);
      const horas = Math.floor((diferencaMs / (1000 * 60 * 60)) % 24);
      const dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

      const formato = `${sinal}${dias}d ${horas}h ${minutos}m ${segundos}s`;

      document.getElementById("timer").textContent = formato;
    }

    // Atualiza a cada segundo
    setInterval(atualizarContagem, 1000);
    atualizarContagem(); // Atualiza imediatamente ao carregar

    
