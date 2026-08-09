const jobs = [
    {
        title: "Frontend Developer",
        company: "Tech Solutions",
        location: "Bangalore, India",
        type: "Full Time",
        salary: "₹6 - ₹10 LPA"
    },

    {
        title: "Backend Developer",
        company: "Innovate Labs",
        location: "Hyderabad, India",
        type: "Full Time",
        salary: "₹7 - ₹12 LPA"
    },

    {
        title: "UI/UX Designer",
        company: "Creative Studio",
        location: "Mumbai, India",
        type: "Full Time",
        salary: "₹5 - ₹9 LPA"
    },

    {
        title: "React Developer",
        company: "WebWorks",
        location: "Bangalore, India",
        type: "Full Time",
        salary: "₹6 - ₹11 LPA"
    },

    {
        title: "Node.js Developer",
        company: "Code Labs",
        location: "Pune, India",
        type: "Full Time",
        salary: "₹7 - ₹13 LPA"
    },

    {
        title: "Software Engineer",
        company: "Tech Innovations",
        location: "Chennai, India",
        type: "Full Time",
        salary: "₹8 - ₹14 LPA"
    }
];


// ========================================
// 2. GET HTML ELEMENTS
// ========================================

const searchForm = document.getElementById("job-search");

const jobTitleInput = document.getElementById("job-title");

const locationInput = document.getElementById("location");

const jobContainer = document.querySelector(".job-container");


// ========================================
// 3. DISPLAY JOBS
// ========================================

function displayJobs(jobList) {

    // Clear existing job cards
    jobContainer.innerHTML = "";


    // Check if there are no jobs
    if (jobList.length === 0) {

        jobContainer.innerHTML = `
            <p>No jobs found.</p>
        `;

        return;
    }


    // Create a card for every job
    jobList.forEach(function(job) {

        const jobCard = document.createElement("article");

        jobCard.classList.add("job-card");


        jobCard.innerHTML = `
            <h3>${job.title}</h3>

            <p class="company">
                ${job.company}
            </p>

            <p class="location">
                ${job.location}
            </p>

            <p class="job-type">
                ${job.type}
            </p>

            <p class="salary">
                ${job.salary}
            </p>

            <a href="job-details.html">
                View Job
            </a>
        `;


        jobContainer.appendChild(jobCard);

    });
}


// ========================================
// 4. DISPLAY ALL JOBS WHEN PAGE LOADS
// ========================================

displayJobs(jobs);


// ========================================
// 5. SEARCH JOBS
// ========================================

searchForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get values entered by the user
    const enteredJob = jobTitleInput.value.toLowerCase().trim();

    const enteredLocation = locationInput.value.toLowerCase().trim();


    // Filter the jobs
    const filteredJobs = jobs.filter(function(job) {

        const matchesJob =
            job.title.toLowerCase().includes(enteredJob);

        const matchesLocation =
            job.location.toLowerCase().includes(enteredLocation);


        return matchesJob && matchesLocation;

    });


    // Display the filtered jobs
    displayJobs(filteredJobs);

});


// ========================================
// 6. CLEAR SEARCH WHEN INPUTS ARE EMPTY
// ========================================

jobTitleInput.addEventListener("input", function() {

    if (
        jobTitleInput.value === "" &&
        locationInput.value === ""
    ) {

        displayJobs(jobs);

    }

});


locationInput.addEventListener("input", function() {

    if (
        jobTitleInput.value === "" &&
        locationInput.value === ""
    ) {

        displayJobs(jobs);

    }

});


// ========================================
// 7. NAVIGATION
// ========================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation clicked:", link.textContent);

    });

});


// ========================================
// 8. LOGIN / SIGNUP BUTTONS
// ========================================

const authLinks = document.querySelectorAll(".auth-buttons a");

authLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Authentication page:", link.textContent);

    });

});


// ========================================
// 9. FEATURE CARD INTERACTION
// ========================================

const features = document.querySelectorAll(".feature");

features.forEach(function(feature) {

    feature.addEventListener("click", function() {

        console.log(
            "Feature selected:",
            feature.querySelector("h3").textContent
        );

    });

});


// ========================================
// 10. PAGE LOAD MESSAGE
// ========================================

console.log("SmartHire loaded successfully.");

