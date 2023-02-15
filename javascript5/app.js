let firstCard, secondCard, sum, cards, hasBlackJack, isAlive, message;

firstCard = 11;
secondCard = 3;
cards = [firstCard, secondCard]; //array - ordered list item
sum = firstCard + secondCard;
hasBlackJack = false;
isAlive = true;
message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startgame() {
	rendergame();
}

function rendergame() {
	// render out firstCard and secondCard
	cardsEl.textContent = 'Cards: ' + cards[0] + ' ' + cards[1];
	// render out ALL the cards we have
	sumEl.textContent = 'Sum: ' + sum;
	if (sum < 21) {
		message = 'Do you want to draw a new card?';
	} else if (sum === 21) {
		message = "Wohoo! You've got Blackjack! ";
		hasBlackJack = true;
	} else {
		console.log("You're out of the game! ");
		isAlive = false;
	}

	messageEl.textContent = message;
}

function newcard() {
	let card = 5;
	sum += card;
	rendergame();
}
