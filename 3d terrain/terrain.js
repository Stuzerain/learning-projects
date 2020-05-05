

var cols, rows;
var scl = 20;
const w = 1600;
const h = 1200;

var flying = 0;
var terrain = [];

frameRate(144);

function setup() {
    createCanvas(1200, 900, WEBGL);
    cols = w / scl;
    rows = h / scl;

    for (var x = 0; x < cols; x++) {
        terrain[x] = [];
        for (var y = 0; y < rows; y++) {
            terrain[x][y] = 0;
        }
    }
}


function draw() {
    flying -= 0.025;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
            xoff += 0.1;
        }
        yoff += 0.075;
    }



    background(0);
    translate(0, 50);
    rotateX(PI/3);
    fill(150, 200, 175, 75);
    translate(-w /2, -h /2)

    for (var y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (var x = 0; x < cols; x++) {
          vertex(x * scl, y * scl, terrain[x][y]);
          vertex(x * scl, (y + 1) * scl, terrain[x][y+1]);
        }
        endShape();
    }

}