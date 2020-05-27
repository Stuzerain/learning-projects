function Ball() {
    this.w = wall;
    this.h = wall;
    this.x = paddle.x;
    this.y = paddle.y - paddle.h / 2 - this.h / 2;
    this.xv = 0;
    this.yv = 0;
    this.spd = BALL_SPD * height;

    this.setSpd = function(spdMult) {
        this.spd = Math.max(this.spd, BALL_SPD * height * spdMult);
        console.log("spd=" + this.spd);
    }
}

function fetchCurrentSpd() {
    currentSpd = ball.spd;
    console.log("currentSpd = " + currentSpd);
    return currentSpd;
}

function newBall() {
    pupExtension = false;
    pupSticky = false;
    pupSuper = false;
    paddle = new Paddle();
    ball = new Ball();
}

function applyBallSpeed(angle) {
    //update x and y velocities of ball
    ball.xv = ball.spd * Math.cos(angle);
    ball.yv = -ball.spd * Math.sin(angle);
}

function serve() {
    //ball already in motion
    if (ball.yv != 0) {
        return false;
    }
    //random angle, between 45 and 135 degrees
    let angle = Math.random() * Math.PI / 2 + Math.PI / 4;
    bgm.play();

    //applyBallSpeed(pupSticky ? relativeBounce(ball.spd) : angle);
    if (!pupSticky) {
        applyBallSpeed(angle);
        fxPaddle.play();
        return true;
    } else if (pupSticky) {
        relativeBounce(currentSpd);
        fxPaddle.play();
        console.log(ball.xv)
        console.log(ball.yv)
        return true;
    }
}

function updateBall(delta) {
    var intersectX, ballSpeed, influenceX;
    ball.x += ball.xv * delta;
    ball.y += ball.yv * delta;

    //bounce ball off walls
    if (ball.x < wall + ball.w * 0.5) {
        ball.x = wall + ball.w * 0.5;
        ball.xv = -ball.xv;
        fxWall.play();
    } else if (ball.x > canv.width - wall - ball.w * 0.5) {
        ball.x = canv.width - wall - ball.w * 0.5;
        ball.xv = -ball.xv; 
        fxWall.play();
    } else if (ball.y < wall + ball.h * 0.5) {
        ball.y = wall + ball.h * 0.5;
        ball.yv = -ball.yv;
        fxWall.play();
    }

    //bounce ball off paddle - SIMPLE BOUNCE
    //if (ball.y > paddle.y - paddle.h * 0.5 - ball.h * 0.5
    //    && ball.y < paddle.y + paddle.y + paddle.h * 0.5
    //    && ball.x > paddle.x - paddle.w * 0.5 - ball.w * 0.5
    //    && ball.x < paddle.x + paddle.w * 0.5 - ball.w * 0.5
    //    ) {
    //        ball.y = paddle.y - paddle.h * 0.5 - ball.h * 0.5;
    //        ball.yv = -ball.yv;
    //    }

    //bounce ball off paddle based on where ball hits paddle
    if (ball.y > paddle.y - paddle.h * 0.5 - ball.h * 0.5
        && ball.y < paddle.y + paddle.h * 0.5
        && ball.x > paddle.x - paddle.w * 0.5 - ball.w * 0.5
        && ball.x < paddle.x + paddle.w * 0.5 - ball.w * 0.5
        ) {
            ball.y = paddle.y - paddle.h * 0.5 - ball.h * 0.5;
            if (pupSticky) {
                ball.xv = 0;
                ball.yv = 0
            } else {
            relativeBounce(ballSpeed);
            }
        }
    

    //handle out of bounds
    if (ball.y > canv.height) {
        outOfBounds();
    }
}

function relativeBounce() {
    ballSpeed = currentSpd;
    intersectX = (ball.x - paddle.x) / paddle.w * 0.5;
    influenceX = 1;
    ball.xv = ballSpeed * intersectX * influenceX;
    ball.yv = Math.sqrt(ballSpeed * ballSpeed - ball.xv * ball.xv) *
    (ball.yv >= 0 ? -1 : 1);
    fxPaddle.play();
}