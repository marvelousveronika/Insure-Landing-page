const burger = document.querySelector('.menu-toggle');
const menu = document.querySelector('.hamburger__active');
const stopScroll = document.querySelector('body');

burger.addEventListener('click', () =>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    stopScroll.classList.toggle('active');
})