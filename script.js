// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Effect
const text = "Aspiring Web Developer";
const typingText = document.querySelector('.typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    typingText.textContent = '';
    type();
});

// Animate skill bars on scroll
const skillCards = document.querySelectorAll('.skill-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('.progress').style.width = 
                entry.target.querySelector('.progress').style.width;
        }
    });
}, { threshold: 0.5 });

skillCards.forEach(card => observer.observe(card)); 