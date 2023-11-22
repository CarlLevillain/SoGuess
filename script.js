let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function(){
    wheel.style.transform = "rotate(" + value + "deg)"

    value += Math.ceil(Math.random() * 3600);
}

let penalty = [
    '-15 seconds on the timer for the other team',
    'The other team do only use mimics ',
    'During the round the speaker of the other team do squats / chair ',
    'The other team say just 3 words per cards',
    'The other team can’t past cards during the next round',
    'The other team can say only one answer'
];

let bonus =[
    '+15 sec on the timer for your team',
    'Your team can use one French word ',
    '+2 point for your team',
    'You gain 5 sec par card this effect will be activated for the next round'
]

