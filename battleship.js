let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! Enter a number between 0 and 6.");
    if (guess < 0 || guess > 6) {
        alert("Please enter a number no less than 0 and no greater than 6!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You sunk my battleship!");
                }

            } else {
                alert("MISS!")
        }
    }
}
let stats = "You took" + guesses + " guesses to sink my battleship," + " which means your shooting accuracy was " + (3/guesses);
alert(stats);