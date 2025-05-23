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
        });
    }
    
    // Add animation to the prediction result if it exists
    const predictionResult = document.getElementById('prediction-result');
    if (predictionResult) {
        predictionResult.classList.add('result-animation');
    }
    
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.classList.add('feature-card');
    });
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
