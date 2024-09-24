// Navbar Toggle for Mobile Devices
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Automatic Testimonial Slider
let testimonialCount = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.transform = `translateX(${100 * (index - testimonialCount)}%)`;
    });
    testimonialCount = (testimonialCount + 1) % totalTestimonials;
}

setInterval(showNextTestimonial, 7000);
