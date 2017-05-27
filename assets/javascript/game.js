//generate random number that player has to guess(19-120)
//make each crystal a random number (1-12)
//hide the crystal number from player 
//when crystal is clicked show it in box
//add numbers together
//if number equals random generated number = win 
//if number is > than random number it is a loss
//reset game
 $(document).ready(function() {   

var randomNumber = Math.floor(Math.random() * 120) + 19
var wins = 0;
var losses = 0;
var totalScore = $('#guessedNumber');
var allTotal = "";
var crystal1 = Math.ceil(Math.random() * 12);
var crystal2 = Math.ceil(Math.random() * 12);
var crystal3 = Math.ceil(Math.random() * 12);
var crystal4 = Math.ceil(Math.random() * 12);


$('#crystal-1').click(function() {
    var num = +totalScore.text();
    totalScore.text(num + crystal1);
});
$('#crystal-2').click(function() {
    var num = +totalScore.text();
    totalScore.text(num + crystal2);
});
$('#crystal-3').click(function() {
    var num = +totalScore.text();
    totalScore.text(num + crystal3);
});
$('#crystal-4').click(function() {
    var num = +totalScore.text();
    totalScore.text(num + crystal4);
});


$("#randomNumber").append(randomNumber);

// $("#crystal-1").click(function() {
  
// 	var allTotal = (totalScore += crystal1);
// 	$("#guessedNumber").append(allTotal);

// });

// $("#crystal-2").click(function() {
  
// 	var allTotal = (totalScore += crystal2);
// 	$("#guessedNumber").append(allTotal);

// });

// $("#crystal-3").click(function() {
  
// 	var allTotal = (totalScore += crystal3);
// 	$("#guessedNumber").append(allTotal);

// });

// $("#crystal-4").click(function() {
  
// 	var allTotal = (totalScore += crystal4);
// 	$("#guessedNumber").append(allTotal);

// });







// function resetGame(){
// 	var randomNumber = Math.floor(Math.random() * 120) + 19
// 	var crystal1 = Math.floor(Math.random() * 13);
// 	var crystal2 = Math.floor(Math.random() * 13);
// 	var crystal3 = Math.floor(Math.random() * 13);
// 	var crystal4 = Math.floor(Math.random() * 13);
// }


// if (allTotal===randomNumber) {
// 	wins++;

// }
// else {
// 	losses--;
// }










































});
