//Declaring Variables
var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess; 
var hits = 0;
var guesses = 0;
var isSunk = false;

//Creating loop and getting user guess
while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
//Checking guesses for validity
	if (guess < 0 || guess > 6) {
		alert("Please entera a valid cell number!");
	} else {
		guesses = guesses + 1;

//Checking guesses for hits
if (guess == location1 || guess == location2 || guess == location3) {
	alert("HIT!");
	hits = hits + 1;
	
	

//Checking for sinkage and alerting user
if (hits == 3) {
	isSunk = true;
	alert("You sank my battleship!");
			}
		}else {
			alert("MISS!");
		}
	}
}
	
//Providing stats to user post-game
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your accuracy was " + (3/guesses);
alert(stats);