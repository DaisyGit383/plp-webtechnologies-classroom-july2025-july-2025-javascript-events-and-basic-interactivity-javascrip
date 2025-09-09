//Light/Dark Toggle 
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//Dropdown 
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");
dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
});

// Counter 
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = "Count: " + count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = "Count: " + count;
});

// Form Validation 
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  // Clear old errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("Message").textContent = "";

  let valid = true;

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Indicate your full names.";
    valid = false;
  }

  // Show Success Message
  if (valid) {
    document.getElementById("Message").textContent = "Form submitted successfully!";
    document.getElementById("Message").className = "success";
    form.reset();
  }
});