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
toggleVisibility('clickHere0', 'message0');

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

toggleVisibility('clickHere12', 'message12');

toggleVisibility('clickHere13', 'message13');

toggleVisibility('clickHere14', 'message14');

toggleVisibility('clickHere15', 'message15');

toggleVisibility('clickHere16', 'message16');

toggleVisibility('clickHere17', 'message17');




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

  const dataReferencia = new Date("2025-05-30T10:00:00");

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


document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os botões enviar
  const botoesEnviar = document.querySelectorAll('.enviar-btn');

  botoesEnviar.forEach(function(botao) {
    botao.addEventListener('click', function() {
      // Pega o container pai mais próximo (messageXX)
      const container = botao.closest('div[id^="message"]');

      if (!container) return;

      // Pega o textarea dentro desse container
      const textarea = container.querySelector('.mensagem-textarea');

      if (!textarea) return;

      const mensagem = textarea.value.trim();

      if (mensagem === '') {
        alert('Por favor, digite uma mensagem antes de enviar.');
        return;
      }

      fetch('https://script.google.com/macros/s/AKfycbyr4bnGV0R5jf5y71m5U3X5iR3x9CoeZ74_fyrUrc4YwLPSkV1MZzzIjqhE3FAE1t0nrA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `textarea=${encodeURIComponent(mensagem)}`
      }).then(() => {
        alert('Mensagem enviada com sucesso!');
        textarea.value = '';
      }).catch(() => {
        alert('Erro ao enviar a mensagem.');
      });
    });
  });
});
