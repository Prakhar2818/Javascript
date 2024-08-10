document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const gameStatus = document.getElementById("gameStatus");
  const restartGame = document.getElementById("restartGame");

  let currentPlayer = "X";
  let gameState = Array(9).fill(null);
  let isGameActive = true;

  const createGameBoard = () => {
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.addEventListener("click", () => handleClicks(i));
      gameBoard.appendChild(cell);
    }
  };

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (const combinations of winningCombination) {
      const [a, b, c] = combinations;
      if (
        gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]
      ) {
        gameStatus.innerText = `${currentPlayer} wins!`;
        isGameActive = false;
        return;
      }
    }

    if (!gameState.includes(null)) {
      gameStatus.innerText = "It's a draw!";
      isGameActive = false;
    }
  };

  const handleClicks = (index) => {
    if (gameState[index] || !isGameActive) {
      return;
    }

    gameState[index] = currentPlayer;
    gameBoard.children[index].innerText = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "0" : "X";

    if (isGameActive) {
      gameStatus.innerText = "It's your turn";
    }
  };

  const restartBoard = () => {
    gameState = Array(9).fill(null);
    Array.from(gameBoard.children).forEach((cell) => (cell.innerText = ""));
    currentPlayer = "X"
    isGameActive = true;
    gameStatus.innerText = `${currentPlayer}'s turn`;
  };
  createGameBoard();
  restartGame.addEventListener("click", restartBoard);

  gameStatus.innerText = `${currentPlayer}'s turn`;
});
