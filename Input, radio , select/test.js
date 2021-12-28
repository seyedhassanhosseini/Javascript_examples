function textnpHandler() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log(username,password);

}
function radioInput() {
    const banana = document.getElementById('banana');
    const apple = document.getElementById('apple');
    const orange = document.getElementById('orange');
    if (banana.checked) {
        console.log('the selected is banana');
    }else if (apple.checked) {
        console.log('the selected is apple');
    }else {
        console.log('the selected is orange');

    };
}

function selectOption() {
    const selectBox = document.getElementById('selectBox');
    console.log(selectBox.options[selectBox.selectedIndex].value)
}