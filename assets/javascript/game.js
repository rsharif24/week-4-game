//generate random number that player has to guess(19-120)
//make each crystal a random number (1-12)
//hide the crystal number from player 
//when crystal is clicked show it in box
//add numbers together
//if number equals random generated number = win 
//if number is > than random number it is a loss
//reset game
// --new random number
// --each crystal is assigned an new number
// --the number guessed box is cleared
 $(document).ready(function() {   

var randomNumber = Math.floor(Math.random() * 120) + 19;
var wins = 0;
var losses = 0;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;


$("#randomNumber").text(randomNumber);


function reset(){
	 randomNumber = Math.floor(Math.random() * 120) + 19;
	 crystal1 = Math.floor(Math.random() * 12) + 1;
	 crystal2 = Math.floor(Math.random() * 12) + 1;
	 crystal3 = Math.floor(Math.random() * 12) + 1;
	 crystal4 = Math.floor(Math.random() * 12) + 1;
	$("#randomNumber").text(randomNumber);
	$('#guessedNumber').empty();
}



$('#crystal-1').click(function() {
    num = +$("#guessedNumber").html();
    $("#guessedNumber").html(num + crystal1);

    var p = document.getElementById('guessedNumber');
	var text = p.innerHTML;
	var number = Number(text);
	console.log(number);

		if (number === randomNumber) {
			wins++;
			reset();
		}
		if (number > randomNumber) {
			losses++;
			reset();
		}

	$("#wins").html(wins);
	$("#losses").html(losses);

});


$('#crystal-2').click(function() {
    num = +$("#guessedNumber").html();
    $("#guessedNumber").html(num + crystal2);

    var p = document.getElementById('guessedNumber');
	var text = p.innerHTML;
	var number = Number(text);
	console.log(number);

	    if (number === randomNumber) {
			wins++;
			reset();
		}
		if (number > randomNumber) {
			losses++;
			reset();
		}

	$("#wins").html(wins);
	$("#losses").html(losses);
});


$('#crystal-3').click(function() {

    num = +$("#guessedNumber").html();
    $("#guessedNumber").html(num + crystal3);

    var p = document.getElementById('guessedNumber');
	var text = p.innerHTML;
	var number = Number(text);
	console.log(number);

	    if (number === randomNumber) {
			wins++;
			reset();
		}
		if (number > randomNumber) {
			losses++;
			reset();
		}

	$("#wins").html(wins);
	$("#losses").html(losses);
});


$('#crystal-4').click(function() {

    num = +$("#guessedNumber").html();
    $("#guessedNumber").html(num + crystal4);

    var p = document.getElementById('guessedNumber');
	var text = p.innerHTML;
	var number = Number(text);
	console.log(number);

	    if (number === randomNumber) {
			wins++;
			reset();
		}
		if (number > randomNumber) {
			losses++;
			reset();
		}

	$("#wins").html(wins);
	$("#losses").html(losses);
});







});
