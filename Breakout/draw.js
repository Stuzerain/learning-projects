var img1 = new Image();
img1.src= "images/hitagi.png";

function drawBackground() {
    var pattern = ctx.createPattern(img1, 'no-repeat') 

    ctx.fillStyle = COLOR_BACKGROUND;
    ctx.fillRect(0, 0, canv.width, canv.height) ;
    
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canv.width, canv.height);
}

function drawPaddle() {
    ctx.fillStyle = pupSticky ? PupType.STICKY.color : COLOR_PADDLE;
    ctx.fillRect(paddle.x - paddle.w * 0.5, paddle.y - paddle.h * 0.5, paddle.w, paddle.h)
}

function drawPups() {
    ctx.lineWidth = wall * 0.35;
    for (let pup of pups) {
        ctx.fillStyle = pup.type.color;
        ctx.strokeStyle = pup.type.color;
        ctx.strokeRect(pup.x - pup.w * 0.5, pup.y - pup.h * 0.5, pup.w, pup.h);
        ctx.font = "bold " + pup.h + "px " + TEXT_FONT;
        ctx.textAlign = "center";
        ctx.fillText(pup.type.symbol, pup.x, pup.y + pup.h * 0.25);
    }
}

function drawText() {
    ctx.fillStyle = COLOR_TEXT;

    //dimensions
    let labelSize = textSize * 0.5;
    let margin = wall * 2;
    let maxWidth = width - margin * 2;
    let maxWidth1 = maxWidth * 0.27;
    let maxWidth2 = maxWidth * 0.2;
    let maxWidth3 = maxWidth * 0.2;
    let maxWidth4 = maxWidth * 0.27;
    let x1 = margin;
    let x2 = width * 0.4;
    let x3 = width * 0.6;
    let x4 = width - margin;
    let yLabel = wall + labelSize;
    let yValue = yLabel + textSize * 0.9;

    //labels
    ctx.font = labelSize + "px " + TEXT_FONT;
    ctx.textAlign = "left";
    ctx.fillText(TEXT_SCORE, x1, yLabel, maxWidth1);
    ctx.textAlign = "center"
    ctx.fillText(TEXT_LIVES, x2, yLabel, maxWidth2);
    ctx.fillText(TEXT_LEVEL, x3, yLabel, maxWidth3);
    ctx.textAlign = "right"
    ctx.fillText(TEXT_SCORE_HIGH, x4, yLabel, maxWidth4);

    //values
    ctx.font = textSize + "px " + TEXT_FONT;
    ctx.textAlign = "left";
    ctx.fillText(score, x1, yValue, maxWidth1);
    ctx.textAlign = "center"
    ctx.fillText(lives + "/" + GAME_LIVES, x2, yValue, maxWidth2);
    ctx.fillText(level + 1, x3, yValue, maxWidth3);
    ctx.textAlign = "right"
    ctx.fillText(scoreHigh, x4, yValue, maxWidth4);

    //game over
    if (gameOver) {
        let text = win ? TEXT_WIN : TEXT_GAME_OVER;
        ctx.font = textSize + "px " + TEXT_FONT;
        ctx.textAlign = "center";
        ctx.fillText(TEXT_GAME_OVER, width * 0.35, paddle.y - textSize, maxWidth);
    }

    //music info
    if (musicPlay) {
        let playing = `Now Playing: ${musicChoices[song]}`
        ctx.font = textSize/3 + "px " + TEXT_FONT;
        ctx.textAlign = "left";
        ctx.fillText(playing, width * 0.05, canv.height * 0.99, maxWidth)
    }

}

function drawBall() {
    ctx.fillStyle = pupSuper ? PupType.SUPER.color : COLOR_BALL;

    //rectangle ball
    //ctx.fillRect(ball.x - ball.w * 0.5, ball.y - ball.h * 0.5, ball.w, ball.h)

    //round ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.w * 0.5, 0, Math.PI * 2);
    ctx.fill();
}

function drawWalls() {
    let hwall = wall * 0.5;
    ctx.lineWidth = wall;
    ctx.strokeStyle = COLOR_WALL;
    ctx.beginPath();
    ctx.moveTo(hwall, height);
    ctx.lineTo(hwall, hwall);
    ctx.lineTo(width - hwall, hwall);
    ctx.lineTo(width - hwall, height);
    ctx.stroke();
}

function drawBricks() {
    for (let row of bricks) {
        for (let brick of row) {
            if (brick == null) {
                continue;
            }
            ctx.fillStyle = brick.color;
            ctx.fillRect(brick.left, brick.top, brick.w, brick.h)
        }
    }
}

//red = 0, orange = 0.33, yellow = 0.67, green = 1
function getBrickColor(rank, highestRank) {
    let fraction = rank / highestRank;
    let r, b = 0;
    let g = 0; //g had to be initialized separately or it would appear undefined when returning the
               //rgb value at the end of this function...not sure why this happened

    //red to pink/purple (increase blue)
    if (fraction <= 0.67) {
        r = 255;
        b = 255 * fraction / 0.67;
    }

    //purple to blue (reduce red)
    else {
        r = 255 * (1 - fraction) / 0.33;
        b = 255;
    }

    //return rgb color string
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
