document.addEventListener('DOMContentLoaded', () => {
    const deletionForm = document.getElementById('deletionForm');
    
    if (deletionForm) {
        deletionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const alertBox = document.getElementById('alertBox');
            
            // Add a little loading state
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';

            // Simulate a network request
            setTimeout(() => {
                alertBox.textContent = 'Your account deletion request has been submitted successfully. Our team will process it within 24-48 hours.';
                alertBox.className = 'alert alert-success';
                alertBox.style.display = 'block';
                
                // Reset form
                deletionForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';

                // Scroll to top of the alert
                alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1500);
        });
    }
});
