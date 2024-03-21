import { wordsAndHints } from './word-list.js';

// Selecting elements from the DOM
const wordDisplay = document.querySelector(".word-display"); // Selecting the element to display the word
const guessesText = document.querySelector(".guesses-text"); // Selecting the element to display the number of guesses
const keyboardDiv = document.querySelector(".keyboard"); // Selecting the keyboard element
const gudetamaImage = document.querySelector(".gudetama-IMG"); // Selecting the Gudetama image element
const gameModal = document.querySelector(".modal"); // Selecting the modal element
const playAgainBtn = document.querySelector("#play-again-btn"); // Selecting the Play Again button
const gameOverMessage = document.querySelector("#game-over-message");

playAgainBtn.style.visibility = "hidden";

// Initializing game variables
let currentWord = ""; // Initializing the word to be guessed
let correctLetters = []; // Initializing the array of correctly guessed letters
let wrongGuessCount = 0; // Initializing the number of wrong guesses
const maxGuesses = 6; // Setting the maximum number of guesses allowed

// Function to select a random word and hint
const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsAndHints.length); // Generating a random wordAndHint index
    const { word, hint } = wordsAndHints[randomIndex]; // Getting the word and hint from the array
    currentWord = word; // Setting the currentWord to the selected word
    document.querySelector(".hint-text").innerText = hint; // Updating the hint text
}

// Function to reset the game
const resetGame = () => {
    // Resetting game variables and elements
    correctLetters = []; // Reset the array of correct letters
    wrongGuessCount = 0; // Reset the wrong guess count
        // Update the displayed guesses count
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
        // Reset the word display to blanks for each letter
        wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
        // Enable all keyboard buttons
        keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
        // Hide the game over modal
        gameOverMessage.innerHTML = ''
    }
    
    const updateGuessesText = () => {
        // Update the displayed text showing the number of incorrect guesses
        const guessesTextElement = document.querySelector(".guesses-text"); // Select the element
        if (guessesTextElement) { // Check if the element exists
            guessesTextElement.innerText = `${wrongGuessCount} / ${maxGuesses}`; // Update the text
        }
    }

    const updateWordDisplay = () => {
        // Update the displayed word with correct letters guessed by the player
        const wordDisplayElement = document.querySelector(".word-display"); // Select the element
        if (wordDisplayElement) { // Check if the element exists
            const wordArray = currentWord.split(""); // Convert the currentWord to an array of letters
            const displayArray = wordArray.map(letter => {
                // Check if the letter has been guessed correctly and return the letter or a placeholder
                return correctLetters.includes(letter) ? letter : "_";
            });
            wordDisplayElement.innerHTML = displayArray.join(" "); // Update the display with the correctly guessed letters
        }
    } 

    const init = () => {
        // Initialize keyboardDiv after the DOM is loaded
        const keyboardDiv = document.querySelector(".keyboard");
        
        // Add event listeners to alphabet buttons
        keyboardDiv.querySelectorAll(".alphabet").forEach(button => {
            button.addEventListener("click", () => {
                // Get the lowercase letter from the button text
                const letter = button.innerText.toLowerCase();
                // Check if the letter is in the current word
                if (currentWord.includes(letter)) {
                    // Correct guess
                    correctLetters.push(letter);
                    updateWordDisplay();
                    //if (wrongGuessCount >= maxGuesses){
                 const isWin = currentWord.split("").every(letter => correctLetters.includes(letter));
                 if (isWin) {
                    endGame(true)
                 }
                   // }
                } else {
                    // Wrong guess
                    wrongGuessCount++;
                    updateGuessesText();
                    updateWordDisplay();
                    // Check if the game is over
                    if (wrongGuessCount >= maxGuesses) {
                        endGame(false);
                        // Disable all alphabet buttons
                        keyboardDiv.querySelectorAll(".alphabet").forEach(btn => {
                            btn.disabled = true;
                        });
                    }
                }
                // Disable the button after it's clicked
                button.disabled = true;
            });
        });
    }


const endGame = (isWin) => {
    if (isWin){
        // Code to handle winning the game
        // Display a message indicating the player has won
        
            gameOverMessage.innerHTML = "<p>You win!</p>";
     
    } else {
        // Code to handle losing the game
        // Display a message indicating the player has lost

            gameOverMessage.innerHTML = "<p>Game Over! You ran out of guesses.</p>";

    }
    playAgainBtn.style.visibility = "visible"; // Making the play again button visible
}

// Event listener for the play again button
playAgainBtn.addEventListener("click", () => {
    playAgainBtn.style.visibility = "hidden";
    gameOverMessage.innerHTML = '';
    getRandomWord();
    resetGame();
    //playAgainBtn.style.visibility = "hidden"; // the play again button
    });
    // Wait for the DOM to be fully loaded before calling init
    document.addEventListener("DOMContentLoaded", init);
    
    // Call getRandomWord to start the game
    getRandomWord();
