// Auth Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const loginForm = document.getElementById('loginForm');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
    });
});

// Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate login
    console.log(`Logging in as ${activeTab} with email: ${email}`);
    
    // Redirect based on user type
    if (activeTab === 'jobseeker') {
        window.location.href = 'jobseeker/dashboard.html';
    } else {
        window.location.href = 'recruiter/dashboard.html';
    }
});

// Social Login Buttons
document.querySelectorAll('.btn-social').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = btn.textContent.trim().split(' ').pop();
        alert(`Redirecting to ${provider} authentication`);
    });
});
// Signup Form Validation
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms').checked;
    const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
    
    // Validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }
    
    if (!terms) {
        alert('You must agree to the terms and privacy policy');
        return;
    }
    
    // Simulate signup
    console.log(`Signing up as ${activeTab} with name: ${name}, email: ${email}`);
    
    // Redirect based on user type
    if (activeTab === 'jobseeker') {
        window.location.href = 'jobseeker/dashboard.html';
    } else {
        window.location.href = 'recruiter/dashboard.html';
    }
});