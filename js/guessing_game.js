var form = document.getElementById("guessForm");
var MAX_GUESSES = 5;
var remainingGuesses = 5;
var targetNum;
var guessedNums = [];
var guessInput = document.getElementById("guess");
var submitButton = document.getElementById("submitGuess");
form.addEventListener("submit", guessEntered);
document.getElementById("reset").addEventListener("click", playGame);
function setElementContentsById(elementId, newValue) {
    if (newValue === void 0) { newValue = ""; }
    document.getElementById(elementId).textContent = newValue;
}
function checkGuess(guessedNum) {
    var guessList = document.getElementById("guessList");
    var listElement = document.createElement("li");
    if (guessedNum == targetNum) {
        return true;
    }
    else if (guessedNum < targetNum) {
        listElement.append("You guessed  " + guessedNum + " but it was too low. Guess higher!");
        guessList.appendChild(listElement);
        setElementContentsById("hotOrCold", "You are cold. Guess higher.");
        return false;
    }
    else {
        setElementContentsById("hotOrCold", "You are hot. Guess lower.");
        listElement.append("You guessed  " + guessedNum + " but it was too high. Guess lower!");
        guessList.appendChild(listElement);
        return true;
    }
}
function guessEntered(event) {
    var currentGuess = Number(guessInput.value);
    guessInput.value = "";
    event.preventDefault();
    remainingGuesses -= 1;
    guessedNums.push(currentGuess);
    if (currentGuess !== targetNum) {
        if (remainingGuesses === 0) {
            setElementContentsById("instructions", "Game over. :( The number was " + targetNum + ".");
            submitButton.disabled = true;
            guessInput.disabled = true;
            setElementContentsById("hotOrCold");
        }
        else {
            checkGuess(currentGuess);
            setElementContentsById("instructions", "You have " + remainingGuesses + " guesses remaining.");
        }
    }
    else {
        document.getElementsByTagName("body")[0].style.backgroundImage =
            "url('images/confetti.jpg')";
        setElementContentsById("hotOrCold", "Good job! You guessed the number.");
        var submitButton_1 = document.getElementById("submitGuess");
        submitButton_1.disabled = true;
        guessInput.disabled = true;
        setElementContentsById("guessList");
        setElementContentsById("instructions");
    }
}
function playGame() {
    setElementContentsById("guess");
    setElementContentsById("hotOrCold");
    setElementContentsById("guessList");
    submitButton.disabled = false;
    guessInput.disabled = false;
    setElementContentsById("instructions", "I am thinking of a number between 1 and 100  ...  you have five tries to guess it. Good luck!");
    setElementContentsById("guessList");
    guessedNums = [];
    targetNum = Math.floor(Math.random() * 100 + 1);
    console.log(targetNum);
    remainingGuesses = MAX_GUESSES;
}
playGame();
