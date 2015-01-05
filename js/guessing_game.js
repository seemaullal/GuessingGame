var guessForm = $('#guessForm');
//var hintSection= $('#hints');
var instruct = $('#instructions');

var maxGuesses = 5 ;
var remGuesses = 5 ;
var targetNum;
var guessedNums= [ ];

function guessEntered(event) {
	event.preventDefault();
	remGuesses = remGuesses-1;
	console.log(remGuesses);
	if (remGuesses < 1 ) {
		instruct.text("Game over. :( ");
		$('#guess').disable();

	}
	else{
		instruct.text("You have " + remGuesses + " guesses remaining.");
	}
	
	//hintSection.show();
}


guessForm.submit(guessEntered);

function playGame() {
	//hintSection.hide();
	guessedNums = [ ]; //reset guesses array (in case game played previously)
	targetNum = Math.floor((Math.random()*100)+1); //generate a number between 0 and 100; add 1 so it is between 1 and 100; round down so it is an integer
	remGuesses = maxGuesses; //reset # of remaining guesses

}

playGame();