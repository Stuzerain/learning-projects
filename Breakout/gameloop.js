//game parameters
const PADDLE_SPD = 0.5; //fraction of screen width/second
const BALL_SPD = 0.5; //starting ball speed in fraction of screed height/second
const MAX_BALL_SPD = 2; //max ball speed as multiple of starting speed
const PADDLE_W = 0.1; //paddle width as fraction of screen width
const WALL = 0.02; //wall/ball size as fraction of shortest screen dimension
const PADDLE_SIZE = 1.5; //paddle size as multiple of wall thickness (to adjust so ball doesn't clip when moving too fast due to FPS)
const BRICK_ROWS = 8; //starting number of brick rows
const BRICK_COLS = 14; //number of brick columns
const BRICK_GAP = 0.3; //gap between bricks as fraction of wall width
const MARGIN = 6; //number of empty rows above bricks
const MAX_LEVEL = 10; //maximum game level (+2 rows of bricks per level)
const GAME_LIVES = 3; //starting number of lives
const KEY_SCORE = "highscore"; //save key for local storage of high score
const PUP_CHANCE = 0.015; //chance of powerup dropping from broken brick (0-1)
const PUP_SPD = 0.15; //powerup speed as faction of screen height/second
const PUP_BONUS = 50; //bonus points for collecting redundant powerup
const SOUND_ON = true; //volume toggle
const MUSIC_ON = true; //music toggle

//colors
const COLOR_BACKGROUND = "white";
const COLOR_WALL = "gray";
const COLOR_PADDLE = "black";
const COLOR_BALL = "black";
const COLOR_TEXT = "black";

//text
const TEXT_FONT = "Lucida Console";
const TEXT_LEVEL = "Level";
const TEXT_LIVES = "Ball";
const TEXT_SCORE = "Score";
const TEXT_SCORE_HIGH = "BEST";
const TEXT_GAME_OVER = "GAME OVER!";
const TEXT_WIN = "YOU WIN!";

//set up game canvas and context
var canv = document.createElement("canvas");
document.body.appendChild(canv);
var ctx = canv.getContext("2d");

//set up sound effects

//vanilla sound setups
// var fxBrick = new Sound("sounds/brick.m4a", 2, 0.15);
// var fxPaddle = new Sound("sounds/paddle.m4a", 1, 0.15);
// var fxPowerUp = new Sound("sounds/powerup.m4a", 1, 0.15);
// var fxWall = new Sound("sounds/wall.m4a", 1, 0.15);

//sound setups using howler js
var fxBrick = new Howl({
	src: "sounds/brick.m4a",
	volume: 0.15,
});
var fxPaddle = new Howl({
	src: "sounds/paddle.m4a",
	volume: 0.15,
});
var fxPowerUp = new Howl({
	src: "sounds/powerup.m4a",
	volume: 0.15,
});
var fxWall = new Howl({
	src: "sounds/wall.m4a",
	volume: 0.15,
});

//different songs for different levels
let musicChoices = [
	"kinshicho.mp3",
	"90s.mp3",
	"envy.mp3",
	"sodan.mp3",
	"tokyo.mp3",
	"connect.mp3",
	"woman.mp3",
	"mother.mp3",
	"celeste.mp3",
	"renai.mp3",
];

//background music
let song;
song = Math.floor(Math.random() * musicChoices.length);

//var bgm = new Sound(`sounds/music/${musicChoices[song]}`, 1, 0.1);

var bgm = new Howl({
	src: `sounds/music/${musicChoices[song]}`,
	loop: true,
	volume: 0.1,

	// this.nextSong = function() {
	//     if (song >= musicChoices.length - 1) {
	//         song = 0;
	//     } else if (song >= 0) {
	//         song++
	//     }
	//     bgm.src = `sounds/music/${musicChoices[song]}`;
	// }
});

//game variables
var paddle,
	ball,
	bricks = [],
	pups = [];
var gameOver, win, pupExtension, pupSticky, pupSuper, pupBigBall, pupFloor;
var level, lives, score, scoreHigh;
var numBricks, textSize, touchX;
var currentSpd;
var musicPlay;

//derived dimensions
var height, width, wall;
setDimensions();

function setDimensions() {
	height = window.innerHeight;
	width = window.innerWidth;
	wall = WALL * (height < width ? height : width);
	canv.width = width;
	canv.height = height;
	ctx.textBaseLine = "middle";
	newGame();
}

//set up game loop
var timeDelta, timeLast;
requestAnimationFrame(loop);

function loop(timeNow) {
	if (!timeLast) {
		timeLast = timeNow;
	}

	//calculate time difference
	timeDelta = (timeNow - timeLast) / 1000; //seconds
	timeLast = timeNow;

	//update
	if (!gameOver) {
		updatePaddle(timeDelta);
		updateBall(timeDelta);
		updateBricks(timeDelta);
		updatePups(timeDelta);
	}

	//draw
	drawBackground();
	drawWalls();
	drawPups();
	drawPaddle();
	drawBricks();
	drawText();
	drawBall();

	//call next loop (recursion)
	requestAnimationFrame(loop);
}

function newGame() {
	gameOver = false;
	lives = GAME_LIVES;
	score = 0;
	level = 0;
	win = false;

	//get high score from local storage
	let scoreStr = localStorage.getItem(KEY_SCORE);
	if (scoreStr == null) {
		scoreHigh = 0;
	} else {
		scoreHigh = parseInt(scoreStr);
	}

	//start new level
	newLevel();
}

function newLevel() {
	pups = [];
	touchX = null;
	newBall();
	createBricks();
}

function outOfBounds() {
	lives--;
	if (lives == 0) {
		gameOver = true;
	}
	newBall();
}

function updateScore(brickScore) {
	score += brickScore;

	//check for high score
	if (score > scoreHigh) {
		scoreHigh = score;
		localStorage.setItem(KEY_SCORE, scoreHigh);
	}
}

// function Sound(src, maxStreams = 1, vol = 1.0) {
//     this.src = src;
//     this.streamNum = 0;
//     this.streams = [];
//     for (var i = 0; i < maxStreams; i = i + 1) {
//         this.streams.push(new Audio(src));
//         this.streams[i].volume = vol;
//     }

//     this.play = function() {
//         if (SOUND_ON) {
//         this.streamNum = (this.streamNum + 1) % maxStreams;
//         this.streams[this.streamNum].play();
//         musicPlay = true;
//         }
//     }

//     this.pause = function() {
//         this.streams[this.streamNum].pause();
//         musicPlay = false;
//     }

//     this.stop = function() {
//         this.streams[this.streamNum].pause();
//         this.streams[this.streamNum].currentTime = 0;
//         musicPlay = false;
//     }

//     this.next = function () {
//         if (song >= musicChoices.length - 1) {
//             song = 0;
//         } else if (song >= 0) {
//             song++
//         }
//         this.src = `sounds/music/${musicChoices[song]}`;

//     }
// }

function nextSong() {
	if (song >= musicChoices.length - 1) {
		song = 0;
	} else if (song >= 0) {
		song++;
	}
	bgm.src = `sounds/music/${musicChoices[song]}`;
}
