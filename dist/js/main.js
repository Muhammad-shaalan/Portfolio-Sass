const menuBtn = document.querySelector('.menu-btn');
const menuBranding = document.querySelector('.menu-branding');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menuBranding.classList.add('show');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        //Set Menu State
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menuBranding.classList.remove('show');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        //Set Menu State
        showMenu = false;
    }
}