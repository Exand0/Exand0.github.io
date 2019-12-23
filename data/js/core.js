const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const navLi = document.querySelectorAll('.nav-li');
const logo = document.querySelector('.logo');

function toggleNav() { 
    Array.from(navLi).forEach(el => {
        el.classList.toggle('nav-li-opened');
    });
    logo.classList.toggle('logo-menu-opened');  
    menuBtn.classList.toggle('menu-btn-active');
}


/* document.querySelectorAll('a[href^="#"]').forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); */

function handleEvent(e) {
    const target = e.target;
    if (!target.closest('nav') && menuBtn.classList.contains('menu-btn-active')) {
        toggleNav();   

    }  else if (target.classList.contains('menu-btn')) {
        toggleNav();

    } else if (target.nodeName === 'A' ) {
        if (target.getAttribute('href').charAt(0) === '#') {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}

body.addEventListener('click', handleEvent);

