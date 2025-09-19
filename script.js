// Part 1: Event Handling

const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
});


// Part 2: Interactive Elements


// Light/Dark Mode Toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display = faqAnswer.style.display === "block" ? "none" : "block";
});


// Part 3: Form Validation

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting
  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (at least 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success Message
  if (valid) {
    formSuccess.textContent = "Form submitted successfully! 🎉";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
