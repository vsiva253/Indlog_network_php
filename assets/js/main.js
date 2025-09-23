// Main JavaScript for INDLOG Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initScrollAnimations();
    initBackToTop();
    initNewsletterForm();
    initMobileMenu();
    initTableResponsive();
    initThemeToggle();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.feature-card, .member-card, .section-header');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Newsletter form handling
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('.newsletter-input');
        const submitBtn = this.querySelector('.newsletter-btn');
        const email = emailInput.value.trim();
        
        // Validate email
        if (!isValidEmail(email)) {
            showFormMessage(emailInput, 'Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<div class="loading"></div>';
        submitBtn.disabled = true;
        
        // Simulate API call (replace with actual implementation)
        setTimeout(() => {
            showFormMessage(emailInput, 'Thank you for subscribing!', 'success');
            emailInput.value = '';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form messages
function showFormMessage(input, message, type) {
    // Remove existing messages
    const existingMessage = input.parentNode.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Add new message
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-${type}`;
    messageEl.textContent = message;
    input.parentNode.appendChild(messageEl);
    
    // Update input styling
    input.classList.remove('error', 'success');
    input.classList.add(type);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageEl.remove();
        input.classList.remove('error', 'success');
    }, 5000);
}

// Mobile menu toggle (for future enhancement)
function initMobileMenu() {
    // This would be implemented when adding a mobile hamburger menu
    console.log('Mobile menu initialized');
}

// Make tables responsive
function initTableResponsive() {
    const tables = document.querySelectorAll('.table');
    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
}

// Theme toggle functionality
function initThemeToggle() {
    // Force light theme to maintain original design
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.add('theme-light');
    
    // Theme toggle disabled to maintain original light design
    // const themeToggle = document.createElement('button');
    // themeToggle.className = 'theme-toggle';
    // themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    // themeToggle.setAttribute('aria-label', 'Toggle theme');
    
    // Add to header actions (optional)
    // const headerActions = document.querySelector('.header-actions');
    // if (headerActions) {
    //     headerActions.appendChild(themeToggle);
        
    //     themeToggle.addEventListener('click', function() {
    //         const currentTheme = document.documentElement.getAttribute('data-theme');
    //         const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
    //         document.documentElement.setAttribute('data-theme', newTheme);
    //         localStorage.setItem('theme', newTheme);
            
    //         // Update icon
    //         const icon = this.querySelector('i');
    //         icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    //     });
    // }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimization
window.addEventListener('scroll', throttle(function() {
    // Throttled scroll events for better performance
}, 16));

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
