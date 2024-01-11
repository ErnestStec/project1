const Startknop = document.getElementById('Startknop'); 
const KleurenBlok = document.getElementById('KleurenBlok');
let startTime, endTime;
Startknop.addEventListener('click', startGame);

function startGame() {
KleurenBlok.style.backgroundColor = 'red';
KleurenBlok.addEventListener('click', endGame);
const randomTime = Math.random()* 10000;

setTimeout(() => {
KleurenBlok.style.backgroundColor = 'green';
startTime = new Date().getTime(); 
}, randomTime);
}

function endGame() {
if (KleurenBlok.style.backgroundColor === 'green') {
endTime = new Date().getTime(); 
const reactionTime = endTime - startTime; 
alert('Je reactietijd was ${reactionTime} milliseconden.');
}
else {
    alert('Je was te vroeg!');
}
KleurenBlok.style.backgroundColor = 'white';
KleurenBlok.removeEventListener('click', endGame);
}