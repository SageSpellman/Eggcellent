const wordDisplay = document.querySelector("word-display");
const guessesText = document.querySelector("guesses-text");
const keyboardDiv = document.querySelector("keyboard");
const gudetamaImage = document.querySelector("gudetama-startphase.gif");
const playAgainBtn = gameModal.querySelector("button");
const AUDIO = new Audio("");

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    // Resetting game variables and elements
    correctLetters = [];
    wrongGuessCount = 0;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    // Selecting a random word and hint from the wordList
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word; // Making currentWord as random word
    document.querySelector("hint-text").innerText = hint;
    resetGame();
}