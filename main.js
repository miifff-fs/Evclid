const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const lines = document.querySelectorAll('.burger__line');

if (burger && nav && lines.length > 0) {
    function toggleBurger() {
        nav.classList.toggle('active');
        lines.forEach((line) => line.classList.toggle('active'));
    }

    burger.addEventListener('click', toggleBurger);
}

if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
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

        autoplay: {
            delay: 3000,
        },
    });
}