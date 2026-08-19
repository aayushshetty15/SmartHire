// Get the login form

const loginForm = document.getElementById("login-form");

const loginMessage = document.getElementById("login-message");


// Listen for form submission

loginForm.addEventListener("submit", function(event) {

    // Prevent page refresh

    event.preventDefault();


    // Get form values

    const email =
        document.getElementById("login-email").value;

    const password =
        document.getElementById("login-password").value;


    // Simple validation

    if (email === "" || password === "") {

        loginMessage.textContent =
            "Please enter your email and password.";

        return;

    }


    // Temporary login message

    loginMessage.textContent =
        "Login successful!";


    console.log("Login attempted");

    console.log("Email:", email);

});