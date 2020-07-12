let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// create four functions in script.js

const generateTarget = () => Math.floor(Math.random() * 9); // if you wish to omit the returns on arrow functons then you need to omit the curly braces as well.

const compareGuesses = (userGuess, cpuGuess, secretNumber) => {
    let cpuDistance, userDistance;
    (secretNumber < cpuGuess) ? cpuDistance = cpuGuess - secretNumber : cpuDistance = secretNumber - cpuGuess; // if the third argument is less than the cpu Guess. then subtract it from the guess to get the distance between the two numbers.
    (secretNumber < userGuess) ? userDistance = userGuess - secretNumber : userDistance = secretNumber - userGuess;
    
    return cpuDistance > userDistance ? true : false; 
}

const updateScore = winnerString => {
    try{
        switch(winnerString.toLowerCase()){
            case "human":
                humanScore++;
                break;
            case "computer":
                computerScore++;
                break;
            default:
                throw Error("Could not add to the human or comptuer score. Try again later.");
        }
    } catch(errorString){
        console.error(errorString);
    }
}

const advanceRound = () => { currentRoundNumber++; }