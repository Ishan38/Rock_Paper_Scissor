function playGame(playerChoice) {
    const choices = ['r', 'p', 's'];
    const choiceNames = { r: "Rock", p: "Paper", s: "Scissors" };

    // Validate player input
    if (!choices.includes(playerChoice)) {
        document.getElementById('computer-choice').textContent = "";
        document.getElementById('outcome').textContent = "Invalid choice! Please select Rock (r), Paper (p), or Scissors (s).";
        return;
    }

    // Generate computer choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Determine the outcome
    let outcome;
    if (playerChoice === computerChoice) {
        outcome = "It's a tie!";
    } else if (
        (playerChoice === 'r' && computerChoice === 's') ||
        (playerChoice === 'p' && computerChoice === 'r') ||
        (playerChoice === 's' && computerChoice === 'p')
    ) {
        outcome = "You win!";
    } else {
        outcome = "You lose!";
    }

    // Display results
    document.getElementById('computer-choice').textContent = `Computer chose: ${choiceNames[computerChoice]}`;
    document.getElementById('outcome').textContent = outcome;
}
