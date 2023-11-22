let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function(){
    wheel.style.transform = "rotate(" + 99999999999999999999999999999999999999999999 + "deg)"

    value += Math.ceil(Math.random() * 3600);
}