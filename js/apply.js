// Get the application form
const urlParams = new URLSearchParams(window.location.search);

const jobTitle = urlParams.get("title");

const selectedJob = document.getElementById("selected-job");

if (jobTitle) {

    selectedJob.textContent =
        `Applying for: ${jobTitle}`;

}

const applicationForm = document.getElementById("application-form");

const successMessage = document.getElementById("success-message");


// Listen for form submission

applicationForm.addEventListener("submit", function(event) {

    // Prevent page refresh

    event.preventDefault();


    // Get values from the form

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const resume = document.getElementById("resume").files[0];

    const coverLetter =
        document.getElementById("cover-letter").value;


    // Check if resume is uploaded

    if (!resume) {

        alert("Please upload your resume.");

        return;

    }


    // Check if cover letter is empty

    if (coverLetter.trim() === "") {

        alert("Please enter a cover letter.");

        return;

    }


    // Display success message

    successMessage.textContent =
        `Application submitted successfully, ${name}!`;

    
    // Clear the form

    applicationForm.reset();


    // Show submitted information in console

    console.log("Application Submitted");

    console.log("Name:", name);

    console.log("Email:", email);

    console.log("Phone:", phone);

    console.log("Resume:", resume.name);

    console.log("Cover Letter:", coverLetter);

});