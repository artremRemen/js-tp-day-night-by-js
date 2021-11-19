const eSwitch = document.querySelector('.tumbler__wrapper');
const ChangeMode = document.querySelector('.tumbler');
let flipflop = 0;
eSwitch.addEventListener('click', ()=>{
    if (flipflop === 0) {
        ChangeMode.classList.add('tumbler--night-mode');
        document.body.classList.add('body--night-mode');
        document.body.classList.add('post--night-mode');
        flipflop =1
    }
    else{
        ChangeMode.classList.remove('tumbler--night-mode');
        document.body.classList.remove('body--night-mode');
        document.body.classList.remove('post--night-mode');
        flipflop = 0
    }
});