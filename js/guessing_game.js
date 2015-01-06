var guessForm = $('#guessForm');
var guess = $('#guess');
var instruct = $('#instructions');
var reset = $('#reset');
var maxGuesses = 5 ;
var remGuesses = 5 ;
var targetNum;
var guessedNums= [ ];
var hint = $('#hotOrCold');

function noEnterSubmit(evt) {
	if (event.keyCode === 13) {
		event.preventDefault();
	}
}

function guessEntered(event) {
	var curGuess = Number(guess.val());
	guess.val('');
	event.preventDefault();
	remGuesses = remGuesses-1;
	guessedNums.push(curGuess);
	console.log(guessedNums);
	if (remGuesses < 1 ) {
		instruct.text("Game over. :( ");
		$('#submitGuess').attr('disabled','disabled');
		guess.bind('keypress',noEnterSubmit )
	}
	else{
		checkGuess(curGuess);
		instruct.text("You have " + remGuesses + " guesses remaining.");
	}
	
	//hintSection.show();
}

function checkGuess(guessedNum) {
	
	if (guessedNum==targetNum) {
		hint.text("Good job! You guessed the number.");
		$('#submitGuess').attr('disabled','disabled');
		guess.bind('keypress',noEnterSubmit )
	}

	else if (guessedNum < targetNum) {
		hint.text("You are cold. Guess higher.");
	}

	else 
		hint.text("You are hot. Guess lower.");

}

guessForm.submit(guessEntered);
reset.click(playGame);


function playGame() {
	guess.val('');
	hint.text('');
	$('#submitGuess').removeAttr('disabled');
	guess.unbind('keypress',noEnterSubmit);
	instruct.text("I am thinking of a number between 1 and 100  ...  you have five tries to guess it. Good luck!");
	guessedNums = [ ]; //reset guesses array (in case game played previously)
	targetNum = Math.floor((Math.random()*100)+1); //generate a number between 0 and 100; add 1 so it is between 1 and 100; round down so it is an integer
	console.log(targetNum);
	remGuesses = maxGuesses; //reset # of remaining guesses

}

playGame();