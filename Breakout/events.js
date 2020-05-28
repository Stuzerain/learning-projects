 //event listeners
 canv.addEventListener("touchcancel", touchCancel);
 canv.addEventListener("touchend", touchEnd);
 canv.addEventListener("touchmove", touchMove);
 canv.addEventListener("touchstart", touchStart);
 document.addEventListener("keydown", keyDown);
 document.addEventListener("keyup", keyUp);
 window.addEventListener("resize", setDimensions);

 //definitions 
 const Direction = {
    LEFT: 0,
    RIGHT: 1,
    STOP: 2
}

 function keyDown(ev) {
    switch (ev.keyCode) {
        case 37: //left arrow moves paddle left
            movePaddle(Direction.LEFT);
            break;
        case 39: //right arrow moves paddle right
            movePaddle(Direction.RIGHT);
            break;
        case 32: //space bar serves ball
            serve();
            if (gameOver) {
                newGame();
            }
            break;
        case 90: //z key stops and restarts music
            bgm.pause();
            break;
        case 88: //x key plays music
            bgm.play();
            break;

            //not currently functional
        // case 83: //s key selects next music
        //     bgm.next();
        //     break;
        // case 85: //u key views queued song 
        //     console.log(bgm);
        //     break;
    }
}

function keyUp(ev) {
    switch (ev.keyCode) {
        case 37: //releasing left arrow stops paddle
        case 39: //releasing right arrow stops paddle
            movePaddle(Direction.STOP);
            break;
    }
}

function touchCancel(ev) {
    touchX = null;
    movePaddle(Direction.STOP);
}

function touchEnd(ev) {
    touchX = null;;
    movePaddle(Direction.STOP)
}

function touchMove(ev) {
    touchX = ev.touches[0].clientX;
}

function touchStart(ev) {
    if (serve()) {
        if (gameOver) {
            newGame();
            }
        return;
    }
    touchX = ev.touches[0].clientX;
}