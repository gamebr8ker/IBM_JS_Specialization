function submitFeedback() {
    // Collect the form / element data into variables
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;


    // Update the elements with the variables collected above...
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;


    // Display the div element at line 29 in HTML...
    document.getElementById('userInfo').style.display = 'block';

    alert("Feedback received");
}


const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;





// This "listens" for the Enter key being pressed.
// If Enter IS pressed while on the page, will execute submitFeedback()
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});