// script.js

// Function to hide all sections except the one being clicked
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Add event listeners to navigation links
document.getElementById('home-link').addEventListener('click', (e) => {
    e.preventDefault();
    showSection('hero');
});

document.getElementById('about-link').addEventListener('click', (e) => {
    e.preventDefault();
    showSection('about');
});

document.getElementById('attractions-link').addEventListener('click', (e) => {
    e.preventDefault();
    showSection('attractions');
});

document.getElementById('events-link').addEventListener('click', (e) => {
    e.preventDefault();
    showSection('events');
});

document.getElementById('contact-link').addEventListener('click', (e) => {
    e.preventDefault();
    showSection('contact');
});

// Initially hide all sections except the hero section
document.addEventListener('DOMContentLoaded', () => {
    showSection('hero');
});
