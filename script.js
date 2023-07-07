// Function to get computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to play a single round
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Convert playerSelection to lowercase
    computerSelection = computerSelection.toLowerCase(); // Convert computerSelection to lowercase
  
    // Check for a tie
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    }
  
    // Check for player win conditions
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return "You win! " + playerSelection + " beats " + computerSelection;
    }
  
    // If it's not a tie and player doesn't win, computer wins
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
  
  // Function to play the game
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
      
      console.log(roundResult);
  
      // Update scores
      if (roundResult.includes('win')) {
        playerScore++;
      } else if (roundResult.includes('lose')) {
        computerScore++;
      }
    }
  
    // Display final scores and determine the winner
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Oops! You lose the game.");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Start the game
  game();
  