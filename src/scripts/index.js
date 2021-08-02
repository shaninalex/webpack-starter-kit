import '../scss/style.scss';

// import { tns } from "tiny-slider";

// console.log('initialized')

const toggle_btns = document.querySelectorAll('[toggle-menu]');
const menu = document.getElementById('main-menu');

[].forEach.call(toggle_btns, btn => {
    btn.addEventListener('click', () => {
        console.log(btn);
        btn.classList.toggle('show');
        menu.classList.toggle('show');
    });
});



var slider = tns({
    container: '.gallery',
    items: 1,
    slideBy: 'page',
    autoplay: false
});
