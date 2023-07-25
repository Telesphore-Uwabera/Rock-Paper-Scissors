// script.js

// Function to get computer choice
function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Convert to lowercase for case-insensitivity

    if (computerSelection === playerSelection) {
        return "It's a tie!";
    } else if (computerSelection === "paper" && playerSelection === "rock" ||
        computerSelection === "scissors" && playerSelection === "paper" ||
        computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

var playerSelections = []; // Array to store player's choices

// Function to handle player's choice selection
function selectChoice(choice) {
    playerSelections.push(choice);
    var resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = ""; // Clear previous results

    if (playerSelections.length === 5) {
        game(); // Call the game function after the player selects choices for all five rounds
    }
}

// Function to play the game with 5 rounds and display the results
function game() {
    var resultContainer = document.getElementById("result-container");
    for (var i = 0; i < playerSelections.length; i++) {
        var computerSelection = getComputerChoice();
        var playerSelection = playerSelections[i];
        var result = playRound(playerSelection, computerSelection);
        displayResult(result, resultContainer);
    }
    playerSelections = []; // Reset player's choices
}

// Function to display the result of each round
function displayResult(result, container) {
    var resultElement = document.createElement("p");
    resultElement.textContent = result;
    container.appendChild(resultElement);
}
