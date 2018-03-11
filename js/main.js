var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []
var cardOne = cards[0]
var cardTwo = cards[2]
cardsInPlay.push('cardOne');
cardsInPlay.push('cardTwo');
if (cardsInPlay.length < 2) {
	alert("Pick a second card!")
} else {
	if (cardOne === cardTwo) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}