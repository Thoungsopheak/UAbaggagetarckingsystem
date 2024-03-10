function toggleFeedbackForm() {
    var feedbackBox = document.querySelector('.feedback-box');
    feedbackBox.classList.toggle('active');
}

function submitForm() {
    var feedback = document.getElementById('feedback').value;
    console.log('Feedback submitted:', feedback);
    clearForm();
}

function clearForm() {
    document.getElementById('feedback').value = '';
}
