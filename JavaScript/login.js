    //step-1
document.getElementById('submit-btn').addEventListener('click', function () {
    //step-2
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //step-4
    if(email === '.com' && password === 'secret'){
        window.location.href = "Bank.html";    
    }
    else{
        alert('pleace input valid id or password')
    }
})
