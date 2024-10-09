const invertButton = document.getElementById('invertButton');
const overlay = document.getElementById('overlay');
const body = document.getElementById('body');
const backgroundImage = document.getElementById('backgroundImage');
const letters = document.querySelectorAll('.letter');
let isFlipped = false;

const startFlipAudio = new Audio('./start-flip.mp3'); 
const endFlipAudio = new Audio('./end-flip.mp3');

invertButton.addEventListener('click', () => {
    if (!isFlipped) {
        startFlipAudio.play();

        overlay.classList.add('visible');
        content.classList.add('dimmed');

        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('flipped');
            }, index * 180); 
        });

        setTimeout(() => {
            endFlipAudio.play();

            overlay.classList.remove('visible');
            content.classList.remove('dimmed');

            backgroundImage.src = './bg1f.png'; 
            content.classList.add('flipped'); 

            invertButton.textContent = "Return to Normal";

        }, letters.length * 180 + 850); 
                
        letters.forEach(letter => letter.classList.remove('flipped'));

        isFlipped = true; 
    } else {
        endFlipAudio.pause();
        endFlipAudio.currentTime = 0;

        backgroundImage.src = './bg1.png'; 
        content.classList.remove('flipped');

        invertButton.textContent = "Experience Shikai";

        isFlipped = false;
    }
});