// Get the registration form

const registerForm = document.getElementById("register-form");

const registerMessage =
    document.getElementById("register-message");


// Listen for form submission

registerForm.addEventListener("submit", function(event) {

    // Prevent page refresh

    event.preventDefault();


    // Get form values

    const name =
        document.getElementById("register-name").value;

    const email =
        document.getElementById("register-email").value;

    const password =
        document.getElementById("register-password").value;

    const confirmPassword =
        document.getElementById("confirm-password").value;

    const userType =
        document.getElementById("user-type").value;


    // Check password

    if (password !== confirmPassword) {

        registerMessage.textContent =
            "Passwords do not match.";

        return;

    }


    // Check password length

    if (password.length < 6) {

        registerMessage.textContent =
            "Password must contain at least 6 characters.";

        return;

    }


    // Check account type

    if (userType === "") {

        registerMessage.textContent =
            "Please select an account type.";

        return;

    }


    // Temporary success message

    registerMessage.textContent =
        `Account created successfully, ${name}!`;

    
    console.log("Registration successful");

    console.log("Name:", name);

    console.log("Email:", email);

    console.log("Account Type:", userType);


    // Clear form

    registerForm.reset();

});