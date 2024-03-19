import { wordsAndHints } from './word-list.js';

const wordDisplay = document.querySelector("#word-display");
const guessesText = document.querySelector("#guesses-text");
const keyboardDiv = document.querySelector("#keyboard");
const gudetamaImage = document.querySelector("#gudetama-startphase.gif");
const gameModal = document.querySelector("#modal");

// Initializing game variables
let currentWord = "";
let correctLetters = [];
let wrongGuessCount = 0;
const maxGuesses = 6;

const getRandomWord = () => {
    // Selecting a random word and hint from the wordList
    const randomIndex = Math.floor(Math.random() * wordsAndHints.length);
    const { word, hint } = wordsAndHints[randomIndex];

    currentWord = word; // Making currentWord the random word
    document.querySelector(".hint-text").innerText = hint;
    resetGame();
}

    const resetGame = () => {
        // Resetting game variables and elements
        correctLetters = [];
        wrongGuessCount = 0;
        const guessesText = document.querySelector("#guesses-text");
        if (guessesText) {
            guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
            wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
            keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
            gameModal.classList.remove("show");
        }
    }
    

// Add event listeners to alphabet buttons
if (keyboardDiv) {
    keyboardDiv.querySelectorAll("#alphabet").forEach(button => {
        button.addEventListener("click", () => {
            const letter = button.innerText.toLowerCase();
            if (currentWord.includes(letter)) {
                // Correct guess
                correctLetters.push(letter);
                updateWordDisplay();
            } else {
                // Wrong guess
                wrongGuessCount++;
                updateGuessesText();
                // Check if the game is over
                if (wrongGuessCount >= maxGuesses) {
                    endGame(false);
                }
            }
            button.disabled = true; // Disable the button
        });
    });
}

if (wordsAndHints.length === 0) {
    console.error("No words available in the word list.");
}

// Selecting a random word and hint from the wordList
const randomIndex = Math.floor(Math.random() * wordsAndHints.length);
const { word, hint } = wordsAndHints[randomIndex];
currentWord = word; // Making currentWord as random word

const hintElement = document.querySelector("#hint-text");
if (hintElement) {
    hintElement.innerText = hint;
}

resetGame();



// Call getRandomWord to start the game
getRandomWord();
