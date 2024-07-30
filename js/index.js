const form = document.querySelector("#newsletter__form");
const submittedEmail = document.querySelector(".email__submitted");
const signup = document.querySelector("#signup");
const success = document.querySelector("#success");
const dismiss = document.querySelector(".form__dismiss-btn");
const emailField = document.querySelector("#emailField");
const emailError = document.querySelector("#email__error");

function updateSuccessMessage(email) {
  // Update the span bold email__submitted
  submittedEmail.textContent = email;
}

function switchSections() {
  signup.classList.toggle("main__container-hidden");
  success.classList.toggle("success__card-hidden");
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents the form from submitting the traditional way
  const email = emailField.value; // Gets the value from the email input field

  //Simple email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    // Validates the email format
    emailError.style.display = "none"; // Hides any previous error message
    updateSuccessMessage(email); // Updates the success message with the submitted email
    switchSections(); // Switches the view to the success section
  } else {
    emailError.style.display = "block"; // Displays an error message for invalid email
  }
});

dismiss.addEventListener("click", () => {
  switchSections();
  updateSuccessMessage("");
  form.reset(); //Clear the form fields
  emailError.style.display = "none"; //Hide the error message on dismiss
});
