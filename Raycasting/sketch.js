let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;
let randomWalls = false;
let randomMove = false;

function setup() {
    createCanvas(1000, 1000);

    //5 random intial walls--off by default but toggle is global randomWalls boolen
    if (randomWalls) {
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
}
    
    //walls around edges of canvas
    // +/- 5 values used because using only 0, width, and height did not create a recognizable boundary
    //at corners when particle was sitting at (width / 2, height / 2) and left a visible gap in rays
    walls.push(new Boundary(-5, 0, width + 5, 0));
    walls.push(new Boundary(width, 0, width, height + 5));
    walls.push(new Boundary(width + 5, height + 5, -5, height));
    walls.push(new Boundary(-5, height + 5, -5, 0));

    particle = new Particle();
}



function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }

    particle.show();
    particle.look(walls);

    //random movement or not--toggle is global randomMove boolean
    if (randomMove) {
        particle.update(noise(xoff) * width, noise(yoff) * height);
    
    }

    if (!randomMove) {
        particle.update(width / 2, height / 2);
    }

    //random movement of particle; 0.005 moves slowly around screen and is a good initial value
    //lower values mean slower movement
    xoff += 0.005;
    yoff += 0.005;

    //drawing new boundaries by dragging mouse
    stroke(255);
    if (mouseIsPressed === true) {
      walls.push(new Boundary(mouseX, mouseY, pmouseX, pmouseY));
    }

    //testing to see 'bubble' where ray collides w/ boundary
    //let pt = ray.cast(walls);
    //if (pt) {
    //    fill(255);
    //    ellipse(wall.x, wall.y, 8, 8)
    //}
}
