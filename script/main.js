/* Scroll Reveal */
ScrollReveal().reveal('h1', {
    delay: 800,
    origin: 'bottom',
    distance: '120px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('.header h2', {
    delay: 1200,
    origin: 'bottom',
    distance: '120px',
    duration: 2200,
    reset: false
});

ScrollReveal().reveal('#portfolioItem1', {
    delay: 1000,
    origin: 'bottom',
    distance: '200px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('#portfolioItem2', {
    delay: 1300,
    origin: 'bottom',
    distance: '200px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('#portfolioItem3', {
    delay: 1600,
    origin: 'bottom',
    distance: '200px',
    duration: 2000,
    reset: false
});
ScrollReveal().reveal('#portfolioItem4', {
    delay: 1900,
    origin: 'bottom',
    distance: '200px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('#portfolioItem5', {
    delay: 2100,
    origin: 'bottom',
    distance: '200px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('#portfolioItem6', {
    delay: 2400,
    origin: 'bottom',
    distance: '200px',
    duration: 2000,
    reset: false
});


ScrollReveal().reveal('.counterItem h1', {
    delay: 1800,
    origin: 'bottom',
    distance: '120px',
    duration: 2200,
    reset: false
});

ScrollReveal().reveal('.counterItem h3', {
    delay: 1900,
    origin: 'bottom',
    distance: '120px',
    duration: 2200,
    reset: false
});

ScrollReveal().reveal('.offerItem.left', {
    delay: 1400,
    origin: 'left',
    distance: '200px',
    duration: 2300,
    reset: false
});

ScrollReveal().reveal('.offerItem.right', {
    delay: 1400,
    origin: 'right',
    distance: '200px',
    duration: 2300,
    reset: false
});

ScrollReveal().reveal('.aboutmeItem.left', {
    delay: 800,
    origin: 'left',
    distance: '200px',
    duration: 1300,
    reset: false
});

ScrollReveal().reveal('.aboutmeItem.right', {
    delay: 800,
    origin: 'right',
    distance: '200px',
    duration: 1300,
    reset: false
});

ScrollReveal().reveal('.aboutmeItem h2', {
    delay: 1000,
    origin: 'top',
    distance: '200px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('.aboutmeItem h3', {
    delay: 1200,
    origin: 'bottom',
    distance: '200px',
    duration: 1800,
    reset: false
});

ScrollReveal().reveal('.aboutmeItem p', {
    delay: 1500,
    origin: 'bottom',
    distance: '200px',
    duration: 1900,
    reset: false
});

ScrollReveal().reveal('.contactBlock', {
    delay: 1200,
    origin: 'bottom',
    distance: '150px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('.contact', {
    delay: 1500,
    origin: 'bottom',
    distance: '150px',
    duration: 2100,
    reset: false
});


ScrollReveal().reveal('.footer', {
    delay: 1200,
    origin: 'bottom',
    distance: '150px',
    duration: 2000,
    reset: false
});

ScrollReveal().reveal('.btn, .footerhome', {
    delay: 1000,
    origin: 'bottom',
    distance: '120px',
    duration: 2300,
    reset: false
});

ScrollReveal().reveal('.header', {
    delay: 200,
    duration: 1800,
    reset: false
});

var menu = document.querySelector('.nav');
var button = document.querySelector('.navButton');

button.onclick = function() {
    
    $('.nav').slideToggle("fast");
    
}