// Sample data
const updatesDatabase = [
    { trackingNumber: '12345678', updates: [
        { timestamp: 'Thursday, February 15, 1pm', location: 'Boston Logan Airport'},
        { timestamp: 'Thursday, February 15, 9am', location: 'Dallas Airport' },
        { timestamp: 'Thursday, February 15, 6am', location: 'Los Angeles Airport'},
    ]},
];

// Modify the displayUpdates function to update the dropdown content
function displayUpdates() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.innerHTML = ''; // Clear previous content

    updatesDatabase.forEach(entry => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `<strong>Tracking Number:</strong> ${entry.trackingNumber}<br>`;
        
        // Loop through each update and add to the list
        entry.updates.forEach(update => {
            listItem.innerHTML += `<strong>${update.timestamp}:</strong> ${update.location}<br>`;
        });

        listItem.innerHTML += '<br>'; // Add space between entries
        listItem.onclick = updateClicked; // Assign the click event to the list item
        dropdownContent.appendChild(listItem);
    });
}

// Function to open/close the dropdown
function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display === 'block' ? closeDropdown() : openDropdown();
}

// Function to open the dropdown
function openDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = 'block';
}

// Function to close the dropdown
function closeDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = 'none';
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var userDataArray = JSON.parse(localStorage.getItem('userData')) || [];

function submitForm() {
    var feedbackText = document.getElementById('feedback').value.trim(); // Trim to remove leading/trailing spaces

    // Check if feedback is not empty
    if (feedbackText !== '') {
        // Create a feedback object
        var feedbackObject = {
            feedback: feedbackText
        };

        userDataArray.push(feedbackObject);

        // Update localStorage
        localStorage.setItem('userData', JSON.stringify(userDataArray));

        console.log('User Data Array:', userDataArray);
        clearForm();
        window.location.href = 'thank_you.html';
    } else {
        alert('Please enter your feedback before submitting.');
    }
}

function clearForm() {
    document.getElementById('feedback').value = '';
}
