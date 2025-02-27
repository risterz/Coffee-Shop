// Bean Haven Café - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
    
    // Close mobile menu when clicking a nav link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
    
    // Menu tabs functionality
    const menuTabs = document.querySelectorAll('.menu-tab');
    if (menuTabs.length > 0) {
        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                menuTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Hide all menu sections
                document.querySelectorAll('.menu-section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show the corresponding menu section
                const category = tab.getAttribute('data-category');
                document.getElementById(category).classList.add('active');
            });
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, we'd send the form data to a server
            // For demo purposes, just show success message
            contactForm.style.display = 'none';
            document.getElementById('form-success').classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
            
            // For demo, show the form again after 5 seconds
            setTimeout(() => {
                contactForm.style.display = 'block';
                document.getElementById('form-success').classList.add('hidden');
            }, 5000);
        });
    }
    
    // Reservation form submission
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, we'd send the form data to a server
            // For demo purposes, just show success message
            reservationForm.style.display = 'none';
            document.getElementById('reservation-success').classList.remove('hidden');
            
            // Reset form
            reservationForm.reset();
            
            // For demo, show the form again after 5 seconds
            setTimeout(() => {
                reservationForm.style.display = 'block';
                document.getElementById('reservation-success').classList.add('hidden');
            }, 5000);
        });
    }
    
    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('#newsletter-form');
    if (newsletterForms.length > 0) {
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                // Get the email input
                const emailInput = form.querySelector('input[type="email"]');
                // Store the email value
                const email = emailInput.value;
                // Clear the input
                emailInput.value = '';
                // Change the button text temporarily
                const button = form.querySelector('button');
                const originalText = button.textContent;
                button.textContent = 'Subscribed!';
                button.disabled = true;
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 3000);
            });
        });
    }
    
    // Past events toggle
    const pastEventsBtn = document.getElementById('past-events-btn');
    if (pastEventsBtn) {
        pastEventsBtn.addEventListener('click', function() {
            const pastEvents = document.getElementById('past-events');
            pastEvents.classList.toggle('hidden');
            
            if (pastEvents.classList.contains('hidden')) {
                pastEventsBtn.textContent = 'See Past Events';
            } else {
                pastEventsBtn.textContent = 'Hide Past Events';
            }
        });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Check if the target is not just "#" (like in form submissions)
            if (targetId !== "#") {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Create a sample PDF menu link (in a real scenario, this would be an actual file)
    const menuPdfLink = document.querySelector('a[href="assets/menu.pdf"]');
    if (menuPdfLink) {
        menuPdfLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('In a production environment, this would download the PDF menu. For this demo, the PDF file is not included.');
        });
    }
    
    // Add hover effects for menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.backgroundColor = '#FFF8DC';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.backgroundColor = '';
        });
    });
}); 