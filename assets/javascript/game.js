//Assign letters in an array for the computer to choose from
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//randomize the letter the computer chooses
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];


var guessSoFar = "";
var guessRemaining = 10;
var wins = 0;
var loss = 0;
const counter = {};
console.log(computerChoice);

function reset() {
   
    guessSoFar = "";
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
}


//onclick for the letters on our keyboard


document.addEventListener('keypress', (event) => {
    var userChoice = event.key;

    guessSoFar = userChoice + guessSoFar;
    document.getElementById("letter-guess").innerHTML = guessSoFar;

    
   
    //have the letters only show up when clicked on on guesses so far
    var compare = function (computerChoice, userChoice) {
        //Have the system check if the letter matches, if so user wins
       

        if (computerChoice === userChoice) {
            //Assign wins if the user wins    
            reset();      
            wins++;
            document.getElementById("wins").innerHTML = wins;
            document.getElementById("letter-guess").innerHTML = guessSoFar;
            guessRemaining = 10;
            document.getElementById("Remaining-guess").innerHTML = guessRemaining;
            alert("You're psychic! Type to guess again.")
            


            //if the user doesn't guess after 10 times, then the computer wins        

        } else{
            guessRemaining--;
            document.getElementById("Remaining-guess").innerHTML = guessRemaining;

            if (guessRemaining <= 0) {
                //Assign losses if the computer wins   
                reset();             
                loss++;
                document.getElementById("loss").innerHTML = loss;
                document.getElementById("letter-guess").innerHTML = guessSoFar;
                guessRemaining = 10;
                document.getElementById("Remaining-guess").innerHTML = guessRemaining;
                alert("You're not a psychic. That's okay, type to guess again.")
                


            }
        }


    }
    compare(userChoice, computerChoice);
});













