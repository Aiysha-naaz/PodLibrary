
// let createAccount = document.getElementById('createAccount');
// createAccount.onclick=function() {
//     // Provide the relative path to the target page
//     window.location.href = './register/register.html';
// }

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simple validation
    if (username && password) {
      // Redirect to home page
      window.location.href = "/home/index.html"; // Replace with your home page URL
    } else {
      alert("Please fill in all the required details.");
    }
  });
  