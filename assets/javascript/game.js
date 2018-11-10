var wins = document.getElementById("wins-text");
var losses = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left-text");
var lettersGuessed = document.getElementById("letters-guessed-text");


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var compLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var lettersGuessed = [];

document.onkeyup = function (e) {

    var userGuess = e.key;
    var compGuess = compLetter[Math.floor(Math.random() * compLetter.length)];

    lettersGuessed.push(userGuess);
    document.getElementById("letters-guessed-text").innerHTML = lettersGuessed;

    document.getElementById("guesses-left-text").innerHTML = guessesLeft;
    document.getElementById("wins-text").innerHTML = wins;
    document.getElementById("losses-text").innerHTML = losses;

        document.getElementById("guesses-left-text").innerHTML=guessesLeft;
      
        guessesLeft--;
        if (userGuess === compGuess) {
            wins++;
            guessesLeft = 9;
            lettersGuessed = [];

        } else if (guessesLeft === 0) {
           losses++;
           guessesLeft = 9;
           lettersGuessed = []; 

        }
}

