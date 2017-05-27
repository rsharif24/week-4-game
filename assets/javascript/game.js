//generate random number that player has to guess(19-120)
//make each crystal a random number (1-12)
//hide the crystal number from player 
//when crystal is clicked show it in box
//add numbers together
//if number equals random generated number = win 
//if number is > than random number it is a loss
//reset game
 $(document).ready(function(e) {   
    // your code here
 

var randomNumber = Math.floor(Math.random() * 120) + 19
var wins = 0;
var losses = 0;
var totalScore = 0;
var addedNumber = "";
var crystal1 = Math.floor(Math.random() * 13);
var crystal2 = Math.floor(Math.random() * 13);
var crystal3 = Math.floor(Math.random() * 13);
var crystal4 = Math.floor(Math.random() * 13);


$( "#crystal-1" ).click(function() {
  
	$("#guessedNumber").append(crystal1);

});

$( "#crystal-2" ).click(function() {
  
	$("#guessedNumber").append(crystal2);

});

$( "#crystal-3" ).click(function() {
  
	$("#guessedNumber").append(crystal3);

});

$( "#crystal-4" ).click(function() {
  
	$("#guessedNumber").append(crystal4);

});












































});
