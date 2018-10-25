var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert( "Sorry, try again");
	}
};

var flipCard = function(cardId) {
	var cardFlipped = cards[cardId]
	console.log("User flipped " + cardFlipped.rank);
	console.log(cardFlipped.suit);
	console.log(cardFlipped.cardImage);
	cardsInPlay.push(cardFlipped.rank);

	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
};


flipCard(0);
flipCard(2);
