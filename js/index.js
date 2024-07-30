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
  e.preventDefault();
  const email = emailField.value;

  //Simple email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    emailError.style.display = "none";
    updateSuccessMessage(email);
    switchSections();
  } else {
    emailError.style.display = "block";
  }
});

dismiss.addEventListener("click", () => {
  switchSections();
  updateSuccessMessage("");
  form.reset(); //Clear the form fields
  emailError.style.display = "none"; //Hide the error message on dismiss
});
