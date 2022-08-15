
document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === 'anything@.com' && password === 'secret'){
        window.location.href = "Bank.html";    
    }
    else{
        alert('pleace input valid id or password')
    }
})
