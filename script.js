const canvas = document.getElementById('game');
const ctx = canvas.getcontext('2d')
const box = 20;





let snake = [{x: 10 * box, y: 10 * box}]
let food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box,
}

let score = 0; 
let d;
let game;

document.addEventListener('keydown', direction)



function direction(e) {
    if (e.keycode == 37 && d != 'RIGHT' ) d = 'LEFT';
    else if (e.keycode == 38 && d !='DOWN') d = 'UP';
    else if (e.keycode == 39 && d !='LEFT') d = 'RIGHT';
    else if (e.keycode == 40 && d !='UP') d = 'DOWN';
}





