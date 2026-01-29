// Slinger Entertainment - Landing Page
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = track ? track.querySelectorAll('a') : [];
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;

    function updateCarousel() {
        if (track) {
            track.style.transform = `translateX(-${current * 100}%)`;
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            updateCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            updateCarousel();
        });
    }
});
