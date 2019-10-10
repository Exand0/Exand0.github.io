document.querySelectorAll('a[href^="#"]').forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


