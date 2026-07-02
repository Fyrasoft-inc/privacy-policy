document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const form = document.getElementById('deleteAccountForm');
    const submitBtn = document.getElementById('submitBtn');
    const alertMessage = document.getElementById('alertMessage');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const phoneNumber = document.getElementById('phoneNumber').value;
            
            // Basic validation
            if (!phoneNumber || phoneNumber.trim() === '') {
                showAlert('Please enter your phone number.', 'error');
                return;
            }

            // UI Loading state
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            try {
                // Simulate an API call
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Success
                showAlert('Your account deletion request has been submitted successfully. We will process it shortly.', 'success');
                form.reset();
                
            } catch (error) {
                showAlert('An error occurred while submitting your request. Please try again later.', 'error');
            } finally {
                // Reset button state
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    function showAlert(message, type) {
        alertMessage.textContent = message;
        alertMessage.className = `alert alert-${type}`;
        alertMessage.style.display = 'block';
    }
});
