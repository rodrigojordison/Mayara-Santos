function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/close_white_36dp.svg";
    }
}




// Seleciona todos os links (tanto do menu desktop quanto mobile)
const allNavLinks = document.querySelectorAll('.nav-link');

// Adiciona evento de clique em cada link
allNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove a classe 'active' de todos os links
        allNavLinks.forEach(l => l.classList.remove('active'));
        
        // Adiciona a classe 'active' no link clicado
        this.classList.add('active');
    });
});

// Função do menu mobile (sua função existente)
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}





let slideAtual = 0;
const track = document.getElementById('carroselTrack');
const slides = document.querySelectorAll('.carrosel-slide');
const dotsContainer = document.getElementById('carroselDots');

// cria os dots
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => irParaSlide(i));
    dotsContainer.appendChild(dot);
});

function moverCarrosel(direcao) {
    slideAtual = (slideAtual + direcao + slides.length) % slides.length;
    irParaSlide(slideAtual);
}

function irParaSlide(index) {
    slideAtual = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// troca automática a cada 4s
setInterval(() => moverCarrosel(1), 4000);

// Formuláiro//

document.getElementById('btnWhatsApp').addEventListener('click', function () {
    const numero = '5583999999999'; // ← troque pelo número real (com DDI e DDD, sem espaços ou símbolos)
    const nome     = document.getElementById('nome').value.trim();
    const email    = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
 
    if (!nome || !mensagem) {
      alert('Por favor, preencha pelo menos o nome e a mensagem.');
      return;
    }
 
    const texto =
      `Olá! Me chamo *${nome}*.` +
      (email ? `\nE-mail: ${email}` : '') +
      `\n\n${mensagem}`;
 
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  });


  document.getElementById('ano').textContent = new Date().getFullYear();