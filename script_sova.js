// Appliquer l'effet de parallaxe aux images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.parallax-img');
    if (images.length > 0) {
        new simpleParallax(images, {
            scale: 2,       // Niveau de zoom
            delay: 0.6,     // Délai de l'animation
            orientation: 'right',
            overflow: true  // Permet le débordement de l'image
        });
    }
});

// Gestion des vidéos dans les conteneurs
document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('.video');

    // Lecture automatique au survol
    container.addEventListener('mouseenter', () => video.play());

    // Pause et reset à la sortie
    container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });

    // Toggle lecture/pause au clic
    container.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });
});

// Gestion du scroll horizontal avec la molette
const scrollContainer = document.querySelector('.scroll-container');

if (scrollContainer) {
    scrollContainer.addEventListener('wheel', (event) => {
        // Empêcher le scroll vertical et activer le scroll horizontal
        if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
            event.preventDefault();
            scrollContainer.scrollBy({
                left: event.deltaY > 0 ? 500 : -500, // Déplacement plus doux
                behavior: 'smooth'
            });
        }
    }, { passive: false });
}
