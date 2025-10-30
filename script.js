// ===== Alternar visibilidade de mensagens =====
function toggleVisibility(buttonId, messageId) {
  const button = document.getElementById(buttonId);
  const message = document.getElementById(messageId);

  if (button && message) {
    button.addEventListener('click', function () {
      message.style.display = (message.style.display === 'none') ? 'block' : 'none';
    });
  }
}

for (let i = 0; i <= 169; i++) {
  toggleVisibility(`clickHere${i}`, `message${i}`);
}

// ===== Contagem regressiva para uma data =====
const countdownEl = document.getElementById('countdown');
if (countdownEl) {
  const targetDate = new Date('2026-10-15 00:00:00').getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance <= 10000) countdownEl.classList.add('glowing');
    if (distance < 0) {
      countdownEl.innerText = "Chegou o grande dia!";
      countdownEl.classList.remove('glowing');
      countdownEl.classList.add('complete');
    }
  }, 1000);
}

// ===== Corações caindo =====
document.addEventListener('DOMContentLoaded', function () {
  const heartContainer = document.body;
  const heartCount = 50;

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    const randomX = Math.random() * window.innerWidth;
    heart.style.left = `${randomX}px`;
    heart.style.setProperty('--i', Math.random() * 5);

    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 300);
});

// ===== Música ao clicar na imagem =====
const img = document.getElementById('musicImage');
const audio = document.getElementById('audioPlayer');

if (img && audio) {
  img.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    } 
  });
}

// ===== Contador desde uma data específica =====
const dataReferencia = new Date("2025-10-30T13:46:00");
const timerEl = document.getElementById("timer");

if (timerEl) {
  function atualizarContagem() {
    const agora = new Date();
    let diferencaMs = agora - dataReferencia;
    const sinal = diferencaMs < 0 ? "-" : "";

    diferencaMs = Math.abs(diferencaMs);
    const segundos = Math.floor((diferencaMs / 1000) % 60);
    const minutos = Math.floor((diferencaMs / (1000 * 60)) % 60);
    const horas = Math.floor((diferencaMs / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

    timerEl.textContent = `${sinal}${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }

  setInterval(atualizarContagem, 1000);
  atualizarContagem();
}

// ===== Envio de mensagens via Google Apps Script =====
document.addEventListener('DOMContentLoaded', function () {
  const botoesEnviar = document.querySelectorAll('.enviar-btn');

  botoesEnviar.forEach(function (botao) {
    botao.addEventListener('click', function () {
      const container = botao.closest('div[id^="message"]');
      if (!container) return;

      const textarea = container.querySelector('.mensagem-textarea');
      const inputData = container.querySelector('.data-input');
      if (!textarea || !inputData) return;

      const mensagem = textarea.value.trim();
      const data = inputData.value;

      if (!mensagem || !data) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }

      fetch('https://script.google.com/macros/s/AKfycbzLqe0xhZWgC2ujHnkLphe-A07Bp481tPDhVbim9tRbnWgXQqhOUexnTgTIX1WxJ7vaPA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `textarea=${encodeURIComponent(mensagem)}&data=${encodeURIComponent(data)}`
      }).then(() => {
        alert('Mensagem enviada com sucesso!');
        textarea.value = '';
        inputData.value = '';
      }).catch(() => {
        alert('Erro ao enviar a mensagem.');
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const clickBtn = document.getElementById('clickHere15-10-2025');
  const messageContainer = document.getElementById('message15-10-2025');
  const sendBtn = document.getElementById('sendBtn15-10-2025');
  const successMessage = document.getElementById('successMessage15-10-2025');
  const dateInput = document.getElementById('dateInput15-10-2025');
  const messageText = document.getElementById('messageText15-10-2025');

  // Toggle da mensagem
  clickBtn.addEventListener('click', function() {
    if (messageContainer.classList.contains('show')) {
      messageContainer.classList.remove('show');
      clickBtn.innerHTML = '<span class="btn-icon-15-10-2025">💌</span><span class="btn-text-15-10-2025">Abrir Mensagem Especial</span>';
    } else {
      messageContainer.classList.add('show');
      clickBtn.innerHTML = '<span class="btn-icon-15-10-2025">❌</span><span class="btn-text-15-10-2025">Fechar</span>';
    }
  });

  // Enviar mensagem
  sendBtn.addEventListener('click', function() {
    const date = dateInput.value;
    const message = messageText.value.trim();

    if (!date) {
      alert('Por favor, selecione a data da mensagem.');
      dateInput.focus();
      return;
    }

    if (!message) {
      alert('Por favor, escreva sua mensagem de amor.');
      messageText.focus();
      return;
    }

    // Animação do botão
    sendBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      sendBtn.style.transform = 'scale(1)';
    }, 100);

    // Aqui você pode adicionar a lógica para salvar a mensagem
    console.log('Data:', date);
    console.log('Mensagem:', message);

    // Mostrar mensagem de sucesso
    successMessage.classList.add('show');

    // Limpar campos após 2 segundos
    setTimeout(() => {
      dateInput.value = '';
      messageText.value = '';
      
      // Esconder mensagem de sucesso após mais 1 segundo
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 1000);
    }, 2000);
  });

  // Efeito de digitação no textarea
  messageText.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
});
