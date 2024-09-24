// js/index.js

// Navbar Toggle for Mobile Devices
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal Functionality for Doctor Profiles
const viewButtons = document.querySelectorAll('.view-btn');
const modal = document.getElementById('doctorModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close');

viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const imgSrc = card.querySelector('img').src;
        const name = card.querySelector('h3').innerText;
        const description = card.querySelector('p').innerText;

        modalImg.src = imgSrc;
        modalName.innerText = name;
        modalDescription.innerText = description;

        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close Modal When Clicking Outside of Modal Content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Contact Form Submission Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if(email === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("You have successfully connected!");
        contactForm.reset();
    }
});

// Automatic Review Slider
let reviewCount = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;

function showNextReview() {
    reviews.forEach((review, index) => {
        review.style.transform = `translateX(${100 * (index - reviewCount)}%)`;
    });
    reviewCount = (reviewCount + 1) % totalReviews;
}

setInterval(showNextReview, 5000); // Change review every 5 seconds
