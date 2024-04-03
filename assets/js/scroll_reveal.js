/*Animação para aparecer as divs*/
window.sr = ScrollReveal({ reset: true });

sr.reveal('.apresentation', { duration: 1000 });
sr.reveal('.about', { duration: 1000 });
sr.reveal('.myProjects', { duration: 1000 });
sr.reveal('.projects__container', { duration: 1000 });
sr.reveal('.project', { duration: 1000 });
sr.reveal('.projects__repositories', { duration: 1000 });
sr.reveal('.mySkills', { duration: 1000 });
sr.reveal('.certificates__header', { duration: 1000 });
sr.reveal('.slick-carousel', { duration: 1000 });
sr.reveal('.carousel-title__contact', { duration: 1000 });

window.src = ScrollReveal({ reset: true });
src.reveal('.container__contact', { duration: 1000 });

/*Animação skills*/
var elements = document.querySelectorAll('.skills__container .skills__name');

elements.forEach(function (element, index) {
    ScrollReveal().reveal(element, {
        delay: 300 * index,
        distance: '50px',
        origin: 'left',
        interval: 100
    });
});

/*Animação, "desenvolvedor full stack"*/
var textoCompletoDesenvolvedor = document.querySelector('.apresentation__content').textContent.trim();
var textoCompletoFullStack = document.querySelector('.apresentation__content__fullStack').textContent.trim();

var textoParcialDesenvolvedor = "";
var textoParcialFullStack = "";

var indexDesenvolvedor = 0;
var indexFullStack = 0;

function mostrarTextoDesenvolvedor() {
    if (indexDesenvolvedor < textoCompletoDesenvolvedor.length) {
        textoParcialDesenvolvedor += textoCompletoDesenvolvedor[indexDesenvolvedor];
        document.querySelector('.apresentation__content').textContent = textoParcialDesenvolvedor;
        document.querySelector('.apresentation__content').style.visibility = 'visible';
        indexDesenvolvedor++;
        setTimeout(mostrarTextoDesenvolvedor, 100);
    } else {
        setTimeout(mostrarTextoFullStack, 100); 
    }
}

function mostrarTextoFullStack() {
    if (indexFullStack < textoCompletoFullStack.length) {
        textoParcialFullStack += textoCompletoFullStack[indexFullStack];
        document.querySelector('.apresentation__content__fullStack').textContent = textoParcialFullStack;
        document.querySelector('.apresentation__content__fullStack').style.visibility = 'visible';
        indexFullStack++;
        setTimeout(mostrarTextoFullStack, 100);
    }
}

window.onload = function () {
    setTimeout(mostrarTextoDesenvolvedor, 700);
};

