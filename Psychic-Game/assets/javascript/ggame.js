var wn = 0;
var ls = 0;
var guessesLeft = 9;
var wrongGuesses = [];
var compLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wn = document.getElementById("wins-text");
var ls = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left-text");
var wrongGuesses = document.getElementById("letters-guessed-text");
 

document.onkeyup = function (e) {

    var userGuess = e.key;
    var compGuess = compLetter[Math.floor(Math.random() * compLetter.length)];
   
    
        if ((userGuess === compGuess)) {
            wn++;
        } else if ((userGuess != compGuess)) {
            guessesLeft--;
        }
    
    wrongGuesses.push(userGuess);
    document.getElementById("letters-guessed-text").innerHTML = wrongGuesses;
    document.getElementById("guesses-left-text").innerHTML = guessesLeft;
    document.getElementById("wins-text").innerHTML = wn;
    document.getElementById("losses-text").innerHTML = ls;
}

