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
	if (curGuess!= targetNum) {
		if (remGuesses < 1 ) {
			instruct.text("Game over. :( The number was " + targetNum + ".");
			$('#submitGuess').attr('disabled','disabled');
			guess.attr('disabled','disabled');
			hint.text('');
			//$('#guessList').html('');
		}
		else{
			checkGuess(curGuess);
			instruct.text("You have " + remGuesses + " guesses remaining.");
		}
	}
	else {
		$('#img').attr('background','http://thumbs.dreamstime.com/z/party-streamers-confetti-background-23573239.jpg')
		hint.text("Good job! You guessed the number.");
		$('#submitGuess').attr('disabled','disabled');
		guess.attr('disabled','disabled');
		$('#guessList').html('');

		//guess.bind('keypress',noEnterSubmit )
		instruct.text('');
	}
	
	
	//hintSection.show();
}

function checkGuess(guessedNum) {
	
	if (guessedNum==targetNum) {
		return true;
	}

	else if (guessedNum < targetNum) {
		$('#guessList').append('<li><span>You guessed ' + guessedNum + ' but it was too low. Guess higher!</span></li>');
		hint.text("You are cold. Guess higher.");
		return false
	}

	else {
		hint.text("You are hot. Guess lower.");
		$('#guessList').append('<li>You guessed ' + guessedNum + ' but it was too high. Guess lower!</li>');
		return true;
	}

}

guessForm.submit(guessEntered);
reset.click(playGame);


function playGame() {
	$('#img').attr('background',"http://wallpaper-download.net/wallpapers/funny-wallpapers-cute-green-background-wallpaper-36415.jpg")
	guess.val('');
	hint.text('');
	$('#guessList').html('');
	$('#submitGuess').removeAttr('disabled');
	guess.removeAttr('disabled');
	guess.unbind('keypress',noEnterSubmit);
	instruct.text("I am thinking of a number between 1 and 100  ...  you have five tries to guess it. Good luck!");
	guessedNums = [ ]; //reset guesses array (in case game played previously)
	targetNum = Math.floor((Math.random()*100)+1); //generate a number between 0 and 100; add 1 so it is between 1 and 100; round down so it is an integer
	console.log(targetNum);
	remGuesses = maxGuesses; //reset # of remaining guesses

}

playGame();