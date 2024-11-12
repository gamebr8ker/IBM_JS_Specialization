// Initialization of arrays and variables
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timerLeft = 30;
let gameInterval;   // Manages the game timer.



// DOM element selection
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');



// Dynamically create the card elements within the container, based on the cards array.
// This function creates the card elements dynamically within the game-container div
function generateCards() {
    for (const color of cards) {
        // for each card in the array, create a div element
        const card = document.createElement('div');
        // add class "card" to the new div element.
        card.classList.add('card');
        // sets the dataset.color attr to the the current color value from cards array
        card.dataset.color = color;
        // initialize textContent to '?', b/c it's unknown until player interacts with it
        card.textContent = '?';
        // adds the card element to the game interface within designated container
        gameContainer.appendChild(card);
    }
}



// Shuffle the elements of the array in random order (via Fisher-Yates Shuffle algo)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // for a random index in the array
        // uses destructuring assignments to swap i and j elements, w/o req a temporary var
        [array[i], array[j]] = [array[j], array[i]]
    }

    return array;   // the array is returned (shuffled) at the end of the loop
}



// Manages the logic when a user clicks a card in the game
function handleCardClick(event) {
    // retrieve the element that triggered the event
    const card = event.target;

    // check if the element is a card and if it's already matched. 
    if(!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }

    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    // Add the clicked card to the player-chosen card array
    selectedCards.push(card);
    // Checks if 2 cards selected. Lets player see both (500 ms delay) before running checkMatch functon
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}




// Evaluates whether the 2 selected cards match ea other in the memory match game
function checkMatch() {
    const [card1, card2] = selectedCards;   // array destructuring for var assignment

    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;

    } else {
        // reset the cards to initial values
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }

    // clears the selectedCards array, for the next set of card selections
    selectedCards = [];
}



// Used to start / initialize the game
function startGame() {
    let timeLeft = 30;
    
    // prevent multiple game initiations simultaneously
    startbtn.disabled = true;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    
    startGameTimer(timeLeft);   // counts down from timeLeft var
    // Prep the cards
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';   // Clears game container
    generateCards();

    gameContainer.addEventListener('click', handleCardClick)
}



// Manages the game timer
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    
    // initiate an interval that triggers the function every 1000 ms (1 sec)
        // this updates the timer
    gameInterval = setInterval( () => {
        timeLeft--; // decrements every 1 second
        timerElement.textContent = `Time Left: ${timeLeft}`;    // updates displayed time
    
        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000)
}



// Event listener
// To listen, click event startbtn adds an event listener to the startbtn element.
// This triggers the startGame function when the button is clicked.
startbtn.addEventListener('click', startGame);