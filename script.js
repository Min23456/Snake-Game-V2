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

function collision(head,arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x == arr[i].y) return true;
    }
    return false;
}


function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0, canvas.width, canvas.height);


    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? '#4CAF50' : '#8BC34A'; 
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.fillStyle = '#ff4444';
    ctx.fillRect(food.x,food.y,box, box);
    let snakeX = snake[0].x;
    let snakeY = snake[0].y; 

    if (d == 'LEFT') snakeX -= box;
    if (d == 'UP') snakeY -= box; 
    if (d == 'RIGHT') snakeX += box; 
    if (d == 'DOWN') snakeY += box;
    
    if (snakeX == food.x && snakeY == food.y) {
        score++;
        document.getElementById('score').innerText = 'Score ' + score;
        food = {
            x: Math.floor(Math.random()* 19 + 1) * box,
            y: Math.floor(Math.random()* 19 + 1) * box
        };
    }else {
        snake.pop();
    }

    let newHead = {x: snakeX, y: snakeY};

    if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead,snake)) {
        clearInterval(game);
        document.getElementById('gameOver').style.display = 'block';
        return;
    }
    snake.unshift(newHead);
}







