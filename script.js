
document.querySelector('.navbar-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
});




window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.style.transition = 'opacity 0.6s ease';
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 600);
    }, 2000);
});


(() => {
    'use strict';
    const forms = document.querySelectorAll('.contact-form');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();