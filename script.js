document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Auth modal functionality
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const authModal = document.getElementById('authModal');
    const closeModal = document.querySelector('.close-modal');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const roleBtns = document.querySelectorAll('.role-btn');
    
    function openAuthModal() {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeAuthModal() {
        authModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    loginBtn.addEventListener('click', function() {
        openAuthModal();
        // Set active tab to login
        document.querySelector('.tab-btn[data-tab="login"]').click();
    });
    
    signupBtn.addEventListener('click', function() {
        openAuthModal();
        // Set active tab to signup
        document.querySelector('.tab-btn[data-tab="signup"]').click();
    });
    
    closeModal.addEventListener('click', closeAuthModal);
    
    // Close modal when clicking outside
    authModal.addEventListener('click', function(e) {
        if (e.target === authModal) {
            closeAuthModal();
        }
    });
    
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update active tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Role selection
    roleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            roleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const sliderBtns = document.querySelectorAll('.slider-btn');
    
    sliderBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            
            // Update active testimonial
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            testimonials[index].classList.add('active');
            
            // Update active button
            sliderBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Auto-rotate testimonials
    let currentTestimonial = 0;
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials.forEach(t => t.classList.remove('active'));
        testimonials[currentTestimonial].classList.add('active');
        
        sliderBtns.forEach(btn => btn.classList.remove('active'));
        sliderBtns[currentTestimonial].classList.add('active');
    }, 5000);
    
    // Form submissions (demo purposes only)
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Demo login logic
            if (email && password) {
                closeAuthModal();
                
                // Show job seeker dashboard for demo
                document.getElementById('jobSeekerDashboard').classList.add('active');
                document.body.style.overflow = 'auto';
                
                // Scroll to top
                window.scrollTo(0, 0);
            } else {
                alert('Please enter both email and password');
            }
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const role = document.querySelector('.role-btn.active').getAttribute('data-role');
            
            if (name && email && password) {
                closeAuthModal();
                
                // Show appropriate dashboard based on role
                if (role === 'jobseeker') {
                    document.getElementById('jobSeekerDashboard').classList.add('active');
                } else if (role === 'recruiter') {
                    document.getElementById('recruiterDashboard').classList.add('active');
                }
                
                document.body.style.overflow = 'auto';
                window.scrollTo(0, 0);
            } else {
                alert('Please fill in all fields');
            }
        });
    }
    
    // Demo: Clicking "View Profile" in recruiter dashboard opens modal
    const viewProfileBtns = document.querySelectorAll('.candidates-list .btn-primary');
    const candidateModal = document.getElementById('candidateModal');
    const closeCandidateModal = candidateModal.querySelector('.close-modal');
    
    viewProfileBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            candidateModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeCandidateModal.addEventListener('click', function() {
        candidateModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    candidateModal.addEventListener('click', function(e) {
        if (e.target === candidateModal) {
            candidateModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Demo: Clicking "Log In" as recruiter shows recruiter dashboard
    // This would normally be handled by your authentication system
    // For demo purposes, we'll add a quick way to switch views
    document.addEventListener('keydown', function(e) {
        // Secret key combo for demo purposes only
        if (e.ctrlKey && e.key === 'r') {
            document.getElementById('jobSeekerDashboard').classList.remove('active');
            document.getElementById('recruiterDashboard').classList.add('active');
            window.scrollTo(0, 0);
        } else if (e.ctrlKey && e.key === 'j') {
            document.getElementById('recruiterDashboard').classList.remove('active');
            document.getElementById('jobSeekerDashboard').classList.add('active');
            window.scrollTo(0, 0);
        }
    });
});