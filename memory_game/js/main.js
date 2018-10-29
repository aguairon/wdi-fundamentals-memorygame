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
var cardBack = "images/back.png";
var cardsInPlay = [];
var score = 0;
var gameBoard = document.getElementById('game-board');

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		score = score + 1;
		var scoreField = document.getElementsByTagName('scan')[0];
		scoreField.innerHTML= score;
		setTimeout(function(){alert("You found a match!")}, 100);
	} else {
		setTimeout(function(){alert("Sorry, try again")}, 100);
	}
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	var cardFlipped = cards[cardId];
	if (cardsInPlay.length < 2) {
		this.setAttribute('src', cardFlipped.cardImage);
		cardsInPlay.push(cardFlipped.rank);
		if (cardsInPlay.length === 2) {
		checkForMatch();
		}
	} 
};

var deleteBoard = function() {
	while (gameBoard.hasChildNodes()){
		gameBoard.removeChild(gameBoard.firstChild);
	}
	cardsInPlay = [];
}

var createBoard = function() {
	deleteBoard();

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', cardBack);
		cardElement.setAttribute('data-id', i);
		gameBoard.appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
};

var playGame = function() {
	createBoard();

	var scoreNumber = document.createElement('scan');
	var scoreField = document.getElementsByTagName('h3')[0];
	scoreField.appendChild(scoreNumber);
	scoreNumber.innerHTML = score;

	var button = document.getElementsByTagName('button')[0];
	button.addEventListener('click', createBoard);
};

playGame();
