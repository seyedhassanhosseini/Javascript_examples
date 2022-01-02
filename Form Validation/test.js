function validate() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const message = document.getElementById('message');
    if (username.value.trim() === '' || password.value.trim() === '') {
        message.innerHTML = "you must fill all parts";
        return false
    }
    else{
        return true
    }

}