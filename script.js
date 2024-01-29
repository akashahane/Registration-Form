function validateForm(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email-id").value;
    let password = document.getElementById("password").value;

    if(username === '' || email === '' || password === ''){
        alert("Please fill-in all the details.");
        return false;
    }
    
    alert("Registration Successful!");
    return true;
}

function clearForm() {
    document.getElementById("register").reset();
}