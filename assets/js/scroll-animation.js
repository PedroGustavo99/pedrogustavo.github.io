const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 4;

function animarScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top;

    const itemVisivel = topoItem - metadeWindow < 0;

    if (itemVisivel) {
        scrollAnima.classList.add('show-button')
    } else {
        scrollAnima.classList.remove('show-button')
    } 

}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', animarScroll);
scrollAnima.addEventListener('click', scrollToTop);