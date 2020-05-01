function Paddle() {
    this.w = PADDLE_W * width;
    this.h = wall * PADDLE_SIZE;
    this.x = canv.width / 2;
    this.y = canv.height - wall * 3.5 + this.h / 2;
    this.xv = 0;
    this.spd = PADDLE_SPD * width;
}

function movePaddle(direction) {
    switch (direction) {
        case Direction.LEFT: 
            paddle.xv = -paddle.spd;
            break;
        case Direction.RIGHT:
            paddle.xv = paddle.spd;
            break;
        case Direction.STOP:
            paddle.xv = 0;
            break;
    }
}

function updatePaddle(delta) {
    //handle touch
    if (touchX != null) {
        if (touchX > paddle.x + wall) {
            movePaddle(Direction.RIGHT);
        } else if (touchX < paddle.x - wall) {
            movePaddle(Direction.LEFT);
        } else {
            movePaddle(Direction.STOP);
        }
    }

    //move paddle
    let lastPaddleX = paddle.x
    paddle.x += paddle.xv * delta;

    //stop paddle at walls
    if (paddle.x < wall + paddle.w * 0.5) {
        paddle.x = wall + paddle.w * 0.5;
    } else if (paddle.x > canv.width - wall - paddle.w * 0.5) {
        paddle.x = canv.width - wall - paddle.w * 0.5;
    }

    //move stationary ball with paddle
    if (ball.yv == 0) {
        ball.x += paddle.x - lastPaddleX;
    }

    //collect powerups
    for (let i = pups.length - 1; i >= 0; i--) {
        if (pups[i].x + pups[i].w * 0.5 > paddle.x - paddle.w * 0.5
            && pups[i].x - pups[i].w * 0.5 < paddle.x + paddle.w * 0.5
            && pups[i].y + pups[i].h * 0.5 > paddle.y - paddle.h * 0.5
            && pups[i].y - pups[i].h * 0.5 < paddle.y + paddle.h * 0.5
        ) {
            switch(pups[i].type) {
                case PupType.EXTENSION:
                    //double width of paddle
                    if (pupExtension) {
                        score += PUP_BONUS;
                    } else {
                        pupExtension = true;
                        paddle.w *= 2
                    } break;
                case PupType.LIFE:
                    //add a life (max 5)
                    if (lives >= 5) {
                        score += PUP_BONUS
                    } else {
                         lives++;
                    } break;
                case PupType.STICKY:
                    //paddle "holds" ball for another serve
                    if (pupSticky) {
                            score += PUP_BONUS;
                        } else {
                            pupSticky = true;
                        } break;
                case PupType.SUPER:
                    //double width of paddle
                    if (pupSuper) {
                        score += PUP_BONUS;
                    } else {
                        pupSuper = true;
                    } break;
            }
            pups.splice(i, 1);
            fxPowerUp.play();
        }
    }         
}