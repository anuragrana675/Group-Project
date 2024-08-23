const loginBtn = document.getElementById('loginBtn');
const loginSection = document.getElementById('loginSection');
const closeBtn = document.getElementById('closeBtn');

// Function to open the login section
loginBtn.addEventListener('click', function() {
    loginSection.style.display = 'block';
    setTimeout(function() { // Add a slight delay for the sliding effect
        loginSection.classList.add('open');
    }, 10);
});

// Function to close the login section
closeBtn.addEventListener('click', function() {
    loginSection.classList.remove('open');
    setTimeout(function() { // Wait for the sliding effect to finish before hiding
        loginSection.style.display = 'none';
    }, 300);
});

// Close login section when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === loginSection) {
        loginSection.classList.remove('open');
        setTimeout(function() {
            loginSection.style.display = 'none';
        }, 300);
    }
});
