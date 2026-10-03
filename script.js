// Animation au scroll : les éléments marqués ".reveal" apparaissent
// en fondu dès qu'ils entrent dans la fenêtre visible.
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // joué une seule fois
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el) => observer.observe(el));
});

// Menu burger : ouvre/ferme la navigation sur mobile
document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const mainNav = document.getElementById('main-nav');

    if (!burgerBtn || !mainNav) return; // absent sur les pages projet

    burgerBtn.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        burgerBtn.setAttribute('aria-expanded', isOpen);
        burgerBtn.innerHTML = isOpen
            ? '<i class="fas fa-xmark"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // ferme le menu quand on clique sur un lien
    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            burgerBtn.setAttribute('aria-expanded', false);
            burgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
});