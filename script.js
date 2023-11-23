let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);
var numberOfOptions = 8;

spinBtn.onclick = function () {
    // Désactive le bouton pendant l'animation
    spinBtn.classList.add('disabled');


    var value = Math.ceil(Math.random() * 3600);
    // var value = Math.ceil(Math.random() * 200);

    wheel.style.transition = 'transform 5s ease-in-out';
    wheel.style.transform = 'rotate(' + value + 'deg)';

    setTimeout(function () {
        wheel.style.transition = 'none';
        var degrees = value % 360;
        var segmentSize = 360 / numberOfOptions;
        var winningSegmentIndex = Math.floor((380 - degrees) / segmentSize);
        var winningContent = document.querySelectorAll('.number')[winningSegmentIndex]?.textContent;
        var bonus1 = document.getElementById('bonus1');
        var bonus3 = document.getElementById('bonus3');
        var bonus5 = document.getElementById('bonus5');
        var bonus7 = document.getElementById('bonus7');
        var penalty2 = document.getElementById('penalty2');
        var penalty4 = document.getElementById('penalty4');
        var penalty6 = document.getElementById('penalty6');
        var penalty8 = document.getElementById('penalty8');
        // console.log(winningContent);
        // console.log(degrees);
        // console.log(segmentSize);
        // console.log(winningSegmentIndex);

        let tbody = document.getElementById('text-challenge');
        
        if (winningContent === bonus1.textContent || winningContent === bonus3.textContent || winningContent === bonus5.textContent || winningContent === bonus7.textContent) {
            let textbonus = bonus[Math.floor(Math.random() * 4)]
            // console.log(bonus)
            if (textbonus === undefined)  {
                tbody.innerHTML = `<tr>
                <td> +15 sec on the timer for your team </td>
                </tr>`
                // console.log('bug fix')
            }
            else {
                // console.log(textbonus)
                tbody.innerHTML = `<tr>
                <td> ` + textbonus + ` </td>
                </tr>` 
            }
        } else {
            let textpenalty = penalty[Math.floor(Math.random() * 6)]
            // console.log(textpenalty)
            tbody.innerHTML = `<tr>
            <td> ` + textpenalty + ` </td>
            </tr>` 
        }

        
        // Réactive le bouton une fois l'animation terminée
        spinBtn.classList.remove('disabled');
    }, 5000);
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

