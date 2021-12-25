
function clickHandler() {
    const link = document.getElementById('link');
    link.innerText = 'ww.google.com';
    link.setAttribute('href','https://www.google.com/');
    link.className = 'newTest';
    link.classList.add('change')
    let str = document.querySelector('.heading').innerText;
    console.log(str);
}
