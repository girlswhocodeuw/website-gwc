document.addEventListener("DOMContentLoaded", () => {
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    // Function to show the current slide and hide others
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    // Advance to the next slide
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Loop back to the start
        showSlide(currentSlideIndex);
    }

    // Initial call to display the first slide
    showSlide(currentSlideIndex);

    // Set up an interval to automatically change slides every 3 seconds
    setInterval(nextSlide, 3000);
});

