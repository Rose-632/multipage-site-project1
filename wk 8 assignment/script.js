// --- DOM Element References ---
const darkToggle = document.getElementById('darkToggle');
const body = document.body;
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// --- Dark Mode Toggle ---
function updateToggleBtn() {
    if (body.classList.contains('dark-mode')) {
        darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateToggleBtn();
});

// Set initial icon on page load
window.addEventListener('DOMContentLoaded', updateToggleBtn);

// --- Form Validation ---
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Clear previous feedback
        formMessage.textContent = '';
        formMessage.className = 'form-feedback';

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.classList.add('error');
            return;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.add('error');
            return;
        }

        // If validation passes
        formMessage.textContent = `Thanks for your message, ${name}! We’ll be in touch.`;
        formMessage.classList.add('success');
        
        // Reset the form after a successful submission
        contactForm.reset();
    });
}

function validateEmail(email) {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(email);
}