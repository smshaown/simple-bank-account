document.getElementById('login-submit').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get your password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
  

    if(userEmail == 'smshaown65@gmail.com' && userPassword == 'secret'){
       window.location.href = 'banking.html';
    }
})


// Handle deposit button event
doc