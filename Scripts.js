const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
});


// FAQ section 
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
fetch("navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar-container").innerHTML = data;
})
.catch(error => console.error("Error loading the navbar:", error));
});
