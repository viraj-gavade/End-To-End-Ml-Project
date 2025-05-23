// JavaScript for Forest Fire Weather Index Prediction App

// Form validation and enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Get the prediction form if it exists
    const predictionForm = document.getElementById('prediction-form');
    
    if (predictionForm) {
        // Add input validation and formatting
        const numericInputs = document.querySelectorAll('input[type="number"]');
        
        numericInputs.forEach(input => {
            // Add custom styling on focus
            input.addEventListener('focus', function() {
                this.classList.add('custom-input-field');
            });
            
            // Remove custom styling on blur
            input.addEventListener('blur', function() {
                this.classList.remove('custom-input-field');
            });
            
            // Basic validation
            input.addEventListener('input', function() {
                if (this.value === '') {
                    this.setCustomValidity('This field is required');
                } else {
                    this.setCustomValidity('');
                }
            });
        });
        
        // Add submit animation
        predictionForm.addEventListener('submit', function() {
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.innerHTML = 'Processing...';
            submitButton.disabled = true;
            
            // Store the current scroll position in localStorage to restore it after page reload
            localStorage.setItem('scrollAfterSubmit', 'true');
        });
    }
    
    // Scroll to prediction result if it exists and we just submitted the form
    const predictionResult = document.getElementById('prediction-result');
    if (predictionResult && localStorage.getItem('scrollAfterSubmit') === 'true') {
        // Clear the flag
        localStorage.removeItem('scrollAfterSubmit');
        
        // Scroll to the prediction result with smooth animation
        predictionResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add more noticeable animation
        predictionResult.classList.add('result-animation');
        
        // Highlight the result with a flash effect
        setTimeout(() => {
            predictionResult.classList.add('highlight-flash');
            setTimeout(() => {
                predictionResult.classList.remove('highlight-flash');
            }, 1000);
        }, 300);
    }
    
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.classList.add('feature-card');
    });
    
    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
        
        // Scroll to top when clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const closedIcon = document.getElementById('menu-closed-icon');
    const openIcon = document.getElementById('menu-open-icon');
    
    if (mobileMenu) {
        // Toggle menu visibility
        mobileMenu.classList.toggle('hidden');
        
        // Toggle icons
        closedIcon.classList.toggle('hidden');
        openIcon.classList.toggle('hidden');
    }
}
