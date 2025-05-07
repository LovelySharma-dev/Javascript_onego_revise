const randomNumber = (parseInt(Math.random()*100 +1))
const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a valid number greater than one')
    }else if(guess > 100){
        alert('Please enter a valid number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess == 11){
            displayGuess(guess)
            displayMessage(`Game over, Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess === randomNumber){
        displayMessage('You guessed it right')
        endGame()
    }else if( guess < randomNumber){
        displayMessage('Number is TOO LOW')
    }
    else if( guess > randomNumber){
        displayMessage('Number is TOO HIGH')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //
}

function newGame() {
    //
}

