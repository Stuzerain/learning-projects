function Brick(left, top, w, h, color, score, spdMult) {
    this.w = w;
    this.h = h;
    this.bot = top + h;
    this.left = left;
    this.right = left + w;
    this.top = top;
    this.color = color;
    this.score = score;
    this.spdMult = spdMult;


    this.intersect = function(ball) {
        let bBot = ball.y + ball.h * 0.5
        let bLeft = ball.x - ball.w * 0.5
        let bRight = ball.x + ball.w * 0.5
        let bTop = ball.y - ball.h * 0.5
        return this.left < bRight
            && bLeft < this.right
            && this.bot > bTop
            && bBot > this.top;
    }
}

function createBricks() {
        
    //row dimensions 
    let minY = wall;
    let maxY = ball.y - ball.h * 3.5
    let totalSpaceY = maxY - minY;
    let totalRows = MARGIN + BRICK_ROWS + MAX_LEVEL * 2
    let rowH = totalSpaceY / totalRows;
    let gap = wall * BRICK_GAP;
    let h = rowH - gap;
    textSize = rowH * MARGIN * 0.5;

    //column dimensions
    let totalSpaceX = width - wall * 2
    let colW = (totalSpaceX - gap) / BRICK_COLS;
    let w = colW - gap;

    //populate bricks array
    bricks = [];
    let cols = BRICK_COLS;
    let rows = BRICK_ROWS + level * 2;
    let color, left, top, rank, score, spdMult, rankHigh;
    numBricks = cols * rows;
    rankHigh = rows * 0.5 - 1;
    for (let i = 0; i < rows; i++) {
        bricks[i] = [];
        rank = Math.floor(i * 0.5);
        score = (rankHigh - rank) * 2 + 1;
        spdMult = 1 + (rankHigh - rank) / rankHigh * (MAX_BALL_SPD - 1);
        color = getBrickColor(rank, rankHigh);
        top = wall + (MARGIN + i) * rowH;
        for (let j = 0; j < cols; j++) {
            left = wall + gap + j * colW;
            bricks[i][j] = new Brick(left, top, w, h, color, score, spdMult);
        }
    }
}

function updateBricks(delta) {

    //check for ball collisions
    OUTER: for (let i = 0; i < bricks.length; i++) {
        for (let j = 0; j < BRICK_COLS; j++) {
            if (bricks[i][j] != null && bricks[i][j].intersect(ball)) {
                updateScore(bricks[i][j].score);
                ball.setSpd(bricks[i][j].spdMult);
                fetchCurrentSpd();

                //set ball to edge of brick (help with clipping at high speeds)
                if (ball.yv < 0) { //upwards
                    ball.y = bricks[i][j].bot + ball.h * 0.5;
                } else { //downwards
                    ball.y = bricks[i][j].top - ball.h * 0.5;    
                }

                //create powerup
                if (Math.random() <= PUP_CHANCE) {
                    let px = bricks[i][j].left + bricks[i][j].w / 2;
                    let py = bricks[i][j].top + bricks[i][j].h / 2;
                    let pSize = bricks[i][j].w / 2;
                    let pKeys = Object.keys(PupType);
                    let pKey = pKeys[Math.floor(Math.random() * pKeys.length)];
                    pups.push(new PowerUp(px, py, pSize, PupType[pKey]));
                }


                //bounce ball if not super ball and destroy brick
                if (!pupSuper) {
                ball.yv = -ball.yv
                }
                bricks[i][j] = null;
                numBricks--;
                fxBrick.play();
                break OUTER;
            }
        }
    }

    //next level
    if (numBricks == 0) {
        if (level < MAX_LEVEL) {
            level++;
            newLevel();
        } else {
            gameOver = true;
            win = true;
            newBall();
        }
    }
}