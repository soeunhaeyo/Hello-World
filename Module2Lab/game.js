var number = Math.floor(Math.random() * 100) +1;
var guess;
var limit = 5;
var won = false;
var guesses = [];
var hint;

for (i = 1; i <= limit; i++)
{
    do {
        guess = parseInt(prompt("What is your guess?"));
    } while(isProperGuess())

    if (number == guess)
    {
        document.write("You are correct! The correct answer is " + number + ". You win");
        won = true;
        break;
    }
    else {
        guesses[i - 1] = guess;
        if (guess > number) 
        {
            hint = "high";
        }
        else {
            hint = "low";
        }
        alert("Incorrect. Your guess is too " + hint + ".\nYou have guessed: " + guesses + "\nTries remaining: " + (limit - i));
        
    }
}

if (!won)
{
    document.write("You ran out of tries. You lose! \nThe correct number is " + number);
}

function isProperGuess()
{
    for (j = 0; j < guesses.length; j++){
        if (isNaN(guess)) {
            return true;
        }
        else if (guesses[j] == guess) {
            return true;
        }
    }
    return false;
}
