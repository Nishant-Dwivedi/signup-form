const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword');
const btn = document.getElementById('btn');
const form = document.getElementById('form');

btn.addEventListener('click', () => {
    if(password.value != confirmPassword.value){
        confirmPassword.setCustomValidity("passwords do not match");
        form.preventDefault;
    }

    else {
        confirmPassword.setCustomValidity("");
    }
})




