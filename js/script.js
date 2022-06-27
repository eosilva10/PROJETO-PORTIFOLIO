let menu = document.querySelector('#icone-menu');
let navbar = document.querySelector('.navbar');

// FUNÇÃO PARA ICONE DE ITENS
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// FUNÇÃO PARA REMOVER ICONES APÓS ROLAGEM
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// EFEITO DE TRANSIÇÃO 
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    reset: true
})

// ADICIONANDO O EFEITO NAS SESSÕES DO SITE
sr.reveal('.texto-home', {delay: 200, origin: 'top'});
sr.reveal('.home-img', {delay: 400, origin: 'top'});
sr.reveal('.sobre, .projetos, .cursos, .experiencias, .contato, .copyright', {delay: 200, origin: 'top'});