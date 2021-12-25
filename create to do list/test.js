
window.onload=function () {
    // const userlist = document.querySelectorAll('.name-list li');
    // for(user of userlist) {
    //     user.addEventListener('click',function(){
    //         console.log(user);
    //         this.style.color = 'red';
    //     })
    // }
    const userlist = document.querySelector('.name-list');
    let listInput = document.querySelector('.list-input');
    let btn = document.querySelector('.addList');
    btn.addEventListener('click',function clickHandler(){
        const newUser = document.createElement('li');
        const name = document.createTextNode(listInput.value);
        newUser.appendChild(name);
        userlist.appendChild(name);
        listInput.value = '';

    })

}





