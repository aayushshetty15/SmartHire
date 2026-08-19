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


// Get the title from URL

const urlParams = new URLSearchParams(window.location.search);

const title = urlParams.get("title");


// Find the job

const job = jobs.find(function(job) {

    return job.title === title;

});
const applyButton = document.getElementById("apply-button");

if (job) {

    applyButton.href =
        `apply.html?title=${encodeURIComponent(job.title)}`;

}

// Display job

if (job) {

    document.getElementById("job-title").textContent = job.title;

    document.getElementById("job-company").textContent = job.company;

    document.getElementById("job-location").textContent = job.location;

    document.getElementById("job-type").textContent = job.type;

    document.getElementById("job-salary").textContent = job.salary;

}