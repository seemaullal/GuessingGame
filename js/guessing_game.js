let form = document.getElementById("guessForm");
const MAX_GUESSES = 5;
let remainingGuesses = 5;
let targetNum;
let guessedNums = [];

form.addEventListener("submit", guessEntered);
document.getElementById("reset").addEventListener("click", playGame);

function checkGuess(guessedNum) {
  const guessList = document.getElementById("guessList");
  const hintElement = document.getElementById("hotOrCold");
  const listElement = document.createElement("li");
  if (guessedNum == targetNum) {
    return true;
  } else if (guessedNum < targetNum) {
    listElement.append(
      `You guessed  ${guessedNum} but it was too low. Guess higher!`
    );
    guessList.appendChild(listElement);
    hintElement.textContent = "You are cold. Guess higher.";
    return false;
  } else {
    hintElement.textContent = "You are hot. Guess lower.";
    listElement.append(
      `You guessed  ${guessedNum} but it was too high. Guess lower!`
    );
    guessList.appendChild(listElement);
    return true;
  }
}

function guessEntered(event) {
  const guessInput = document.getElementById("guess");
  const currentGuess = Number(guessInput.value);
  const hintElement = document.getElementById("hotOrCold");
  guessInput.value = "";
  event.preventDefault();
  remainingGuesses -= 1;
  guessedNums.push(currentGuess);
  if (currentGuess !== targetNum) {
    if (remainingGuesses === 0) {
      document.getElementById(
        "instructions"
      ).textContent = `Game over. :( The number was ${targetNum}.`;
      document.getElementById("submitGuess").disabled = true;
      guessInput.disabled = true;
      hintElement.textContent = "";
    } else {
      checkGuess(currentGuess);
      document.getElementById(
        "instructions"
      ).textContent = `You have ${remainingGuesses} guesses remaining.`;
    }
  } else {
    document.getElementsByTagName("body")[0].style.backgroundImage =
      "url('images/confetti.jpg')";
    hintElement.textContent = "Good job! You guessed the number.";
    document.getElementById("submitGuess").disabled = true;
    guessInput.disabled = true;
    document.getElementById("guessList").textContent = "";
    document.getElementById("instructions").textContent = "";
  }
}

function playGame() {
  const guessInput = document.getElementById("guess");
  guessInput.value = "";
  document.getElementById("hotOrCold").textContent = "";
  document.getElementById("guessList").textContent = "";
  document.getElementById("submitGuess").disabled = false;
  guessInput.disabled = false;
  document.getElementById("instructions").textContent =
    "I am thinking of a number between 1 and 100  ...  you have five tries to guess it. Good luck!";
  guessedNums = []; //reset guesses array
  document.getElementById("guessList").textContent = "";
  targetNum = Math.floor(Math.random() * 100 + 1);
  console.log(targetNum);
  remainingGuesses = MAX_GUESSES;
}

playGame();
