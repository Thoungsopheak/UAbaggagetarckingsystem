function handleFormSubmission() {
    // Prevent the default form submission
    event.preventDefault();

    var trackingNumber = document.getElementsByName('trackingNumber')[0].value;
    var placeholderMessage = '';
    // Check if the tracking number is "12345678"
    if (trackingNumber === '12345678') {
        // Redirect the user to "main.html"
        window.location.href = 'main.html';
    } else {
       // Perform other actions or provide feedback for incorrect tracking numbers
       alert('Invalid tracking number. Please try again.');
    }
}