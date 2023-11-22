let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

var numberOfOptions = 8; // Nombre total de cases sur la roulette

spinBtn.onclick = function(){
    var value = Math.ceil(Math.random() * 3600);
    wheel.style.transform = "rotate(" + value + "deg)";

    setTimeout(function() {
        var degrees = value % 360; // Obtenez l'angle réel après la rotation
        var segmentSize = 360 / numberOfOptions; // Taille d'un segment en degrés
        var winningSegmentIndex = Math.floor((360 - degrees) / segmentSize);

        // Récupérez le contenu de la case gagnante
        var winningContent = document.querySelectorAll('.number')[winningSegmentIndex].textContent;
        console.log(winningContent); // Affichez le contenu de la case gagnante
    }, 5000); // Assurez-vous que ce délai correspond à la durée de l'animation
};

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
];

