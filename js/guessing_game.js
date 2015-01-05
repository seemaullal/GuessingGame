var guessForm = $('#guessForm');
var hintSection= $('#hints');
var instruct = $('#instructions');

function guessEntered(event) {
	console.log("Function called");
	event.preventDefault();
	instruct.hide();
	//instruct.text("Changed");
	//instruct.css("display","block")
	hintSection.show();
}


guessForm.submit(guessEntered);


hintSection.hide();