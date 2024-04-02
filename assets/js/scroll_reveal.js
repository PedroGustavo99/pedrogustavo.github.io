window.sr = ScrollReveal({ reset: true});

sr.reveal('.apresentation', { duration: 1000});
sr.reveal('.about', { duration: 1000});
sr.reveal('.myProjects', { duration: 1000});
sr.reveal('.projects__container', { duration: 1000});
sr.reveal('.project', { duration: 1000});
sr.reveal('.projects__repositories', { duration: 1000});
sr.reveal('.mySkills', { duration: 1000});
sr.reveal('.certificates__header', { duration: 1000});
sr.reveal('.carousel-certificates', { duration: 1000});
sr.reveal('.carousel-title__contact', { duration: 1000});
sr.reveal('.contact', { duration: 1000});

var elements = document.querySelectorAll('.skills__container .skills__name');

elements.forEach(function(element, index) {
    ScrollReveal().reveal(element, { 
        delay: 300 * index, 
        distance: '50px',
        origin: 'left', 
        interval: 100 
    });
});
