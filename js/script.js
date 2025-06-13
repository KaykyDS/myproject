// Efeito de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adicione este código ao seu arquivo script.js

// --- LÓGICA DO MODO ESCURO ---

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Função para aplicar o tema salvo
  const applyTheme = (theme) => {
      if (theme === 'dark') {
          body.classList.add('dark-mode');
          darkModeToggle.textContent = '☀️'; // Ícone de sol
      } else {
          body.classList.remove('dark-mode');
          darkModeToggle.textContent = '🌙'; // Ícone de lua
      }
  };

  // Verifica se há um tema salvo no localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      applyTheme(savedTheme);
  }

  // Adiciona o evento de clique ao botão
  darkModeToggle.addEventListener('click', () => {
      let newTheme;
      if (body.classList.contains('dark-mode')) {
          newTheme = 'light';
      } else {
          newTheme = 'dark';
      }
      
      // Salva a nova preferência e aplica o tema
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
  });
});

// // Aguarda o conteúdo da página carregar completamente
// document.addEventListener('DOMContentLoaded', () => {

//     // Seleciona a imagem pelo ID que definimos no HTML
//     const imagem = document.getElementById('imagem-flutuante');

//     // Se a imagem não for encontrada, interrompe o script para evitar erros
//     if (!imagem) return;

//     // Variáveis para controlar a animação
//     let tempo = 0;
//     const amplitudeY = 10; // O quanto a imagem vai se mover para cima e para baixo (em pixels)
//     const amplitudeX = 0;  // O quanto a imagem vai se mover para os lados (em pixels)
//     const velocidade = 0.02; // Controla a velocidade da flutuação

//     // A função que vai animar a imagem a cada frame
//     function flutuar() {
//         tempo += velocidade;

//         // Usamos funções trigonométricas (seno e cosseno) para criar um movimento suave e circular
//         const novoY = Math.sin(tempo) * amplitudeY;
//         const novoX = Math.cos(tempo / 2) * amplitudeX; // Usamos uma frequência diferente para o X para um movimento mais natural

//         // Aplica a nova posição à imagem usando a propriedade 'transform' do CSS
//         imagem.style.transform = `translate(${novoX}px, ${novoY}px)`;

//         // Pede ao navegador para chamar a função 'flutuar' novamente no próximo frame
//         requestAnimationFrame(flutuar);
//     }

//     // Inicia a animação
//     flutuar();
// });

// --- INICIALIZAÇÃO DO SWIPER ---
const swiper = new Swiper('.swiper', {
  // Parâmetros opcionais
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});