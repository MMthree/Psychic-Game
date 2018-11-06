var wins = document.getElementById("wins-text");
var losses = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left-text");
var lettersGuessed = document.getElementById("letters-guessed-text");


var wins = 0;
var losses = 0;
var guessesLeft = 10;
var compLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


document.onkeyup = function(e) {

    var userGuess = e.key;
    var compGuess = compLetter[Math.floor(Math.random() * compLetter.length)];

    if ((userGuess === compGuess)) {
        wins++;
    } else if ((userGuess !== compGuess)) {
        losses--;
        guessesLeft--;

       
    }
        winsText.textContent = wins;
    
}







