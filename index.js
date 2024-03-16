
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  password===confirmPassword
  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
  } else {
    // Perform signup functionality here (e.g., send data to server)
    alert('Signup successful!'); // Placeholder for actual signup process
  }
});

let email = "example.com";
if (email.includes("@")) {
  console.log("Email is correct");
} else {
  alert("Incorrect email.Please enter a valid email.");
 }