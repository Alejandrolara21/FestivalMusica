document.addEventListener('DOMContentLoaded', function() {
    navegacionfija();
});

function navegacionfija() {

    const barra_nav = document.querySelector('.header');

    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            barra_nav.classList.remove('fijo');
        } else {
            barra_nav.classList.add('fijo');
        }
    });

    observer.observe(document.querySelector('.video'));

}