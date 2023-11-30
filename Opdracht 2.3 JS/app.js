const movingDiv = document.getElementById('movingDiv');
const screenWidth = window.innerWidth;
const divWidth = 50;
const speed = 2;
let moveRight = true;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}




function moveDiv () {
    const currentPositionX = parseInt(movingDiv.style.left) || 0;
    if (currentPositionX < 0 || currentPositionX > screenWidth - divWidth) {
        moveRight = !moveRight;
    }
    const newPositionX = currentPositionX + (moveRight ? speed : -speed);
    movingDiv.style.left = newPositionX + 'px';
}

movingDiv.addEventListener('click', function() {
    movingDiv.style.backgroundColor = getRandomColor();
})

const IntervalId = setInterval(moveDiv, 16);
   