function PowerUp(x, y, size, type) {
    this.w = size;
    this.h = size;
    this.x = x;
    this.y = y;
    this.type = type;
    this.yv = PUP_SPD * height;
}

const PupType = {
    EXTENSION: {color: "dodgerblue", symbol: "="},
    LIFE: {color: "hotpink", symbol: "+"},
    STICKY: {color: "forestgreen", symbol: "~"},
    SUPER: {color: "purple", symbol: "s"},
    BIGBALL: {color: "orange", symbol: "B"},
    // FLOOR: {color: "gray", symbol: "F"}
}

function updatePups(delta) {
    for (let i = pups.length - 1; i >= 0; i--) {
        pups[i].y += pups[i].yv * delta;

        //delete off-screen powerups
        if (pups[i].y - pups[i].h * 0.5 > height) {
            pups.splice(i, 1);
        }
    }
}