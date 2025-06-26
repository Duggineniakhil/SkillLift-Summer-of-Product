// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add project button
    const addProjectBtn = document.querySelector('.header-actions .btn');
    addProjectBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to add project page');
        // In a real app, this would redirect to a project creation form
        // window.location.href = 'projects/add.html';
    });
    
    // Skill badge hover effects
    const badgeCards = document.querySelectorAll('.badge-card');
    badgeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.badge-icon');
            icon.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.badge-icon');
            icon.style.transform = 'scale(1)';
        });
    });
    
    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const links = card.querySelectorAll('.link-btn');
        
        card.addEventListener('click', function(e) {
            // Don't redirect if clicking on links
            if (!e.target.closest('.link-btn')) {
                alert('Redirecting to project details');
                // In a real app: window.location.href = 'projects/project-id.html';
            }
        });
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.stopPropagation();
                const icon = this.querySelector('i');
                icon.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 200);
                
                // In a real app, this would open the link
                // const href = this.getAttribute('href');
                // window.open(href, '_blank');
            });
        });
    });
    
    // Endorsement card interactions
    const endorsementCards = document.querySelectorAll('.endorsement-card');
    endorsementCards.forEach(card => {
        card.addEventListener('click', function() {
            const endorserName = this.querySelector('h3').textContent.split(' ')[0];
            alert(`Redirecting to ${endorserName}'s profile`);
            // In a real app: window.location.href = 'profile/endorser-id.html';
        });
    });
    
    // Responsive sidebar toggle for mobile
    const sidebarToggle = document.createElement('button');
    sidebarToggle.className = 'sidebar-toggle btn btn-sm btn-outline';
    sidebarToggle.innerHTML = '<i class="fas fa-bars"></i> Menu';
    sidebarToggle.style.display = 'none';
    sidebarToggle.style.marginBottom = '20px';
    
    const dashboardContent = document.querySelector('.dashboard-content');
    dashboardContent.insertBefore(sidebarToggle, dashboardContent.firstChild);
    
    const sidebar = document.querySelector('.sidebar');
    
    function toggleSidebar() {
        sidebar.classList.toggle('active');
    }
    
    sidebarToggle.addEventListener('click', toggleSidebar);
    
    // Show/hide toggle based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            sidebarToggle.style.display = 'block';
            sidebar.classList.remove('active');
        } else {
            sidebarToggle.style.display = 'none';
            sidebar.classList.add('active');
        }
    }
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});