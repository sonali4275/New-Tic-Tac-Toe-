// Tic Tac Toe Game

// Create an empty game board
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  // Variable to keep track of the current player (X or O)
  let currentPlayer = 'X';
  
  // Function to check if there is a winner
  function checkWinner() {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] !== '' &&
        board[row][0] === board[row][1] &&
        board[row][1] === board[row][2]
      ) {
        return board[row][0];
      }
    }
  
    // Check columns
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] !== '' &&
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col]
      ) {
        return board[0][col];
      }
    }
  
    // Check diagonals
    if (
      board[0][0] !== '' &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return board[0][0];
    }
  
    if (
      board[0][2] !== '' &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return board[0][2];
    }
  
    // Check if there is a tie (the board is full)
    let isBoardFull = true;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === '') {
          isBoardFull = false;
          break;
        }
      }
      if (!isBoardFull) {
        break;
      }
    }
  
    if (isBoardFull) {
      return 'tie';
    }
  
    // No winner yet
    return null;
  }
  
  // Function to handle a player's move
  function makeMove(row, col) {
    if (board[row][col] === '') {
      board[row][col] = currentPlayer;
  
      // Switch players
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  
      // Check for a winner
      let winner = checkWinner();
      if (winner) {
        if (winner === 'tie') {
          alert('It\'s a tie!');
        } else {
          alert('Player ' + winner + ' wins!');
        }
  
        // Reset the game
        resetGame();
      }
  
      // Update the game board
      renderBoard();
    }
  }
  
  // Function to reset the game
  function resetGame() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'X';
    renderBoard();
  }
  
  // Function to render the game board on the webpage
  function renderBoard() {
    let boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
  
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.innerText = board[row][col];
  
        // Add event listener to handle clicks on the cells
        cell.addEventListener('click', function () {
          makeMove(row, col);
        });
  
        boardElement.appendChild(cell);
      }
    }
  }
  
  // Call the renderBoard function to initialize the game
  renderBoard();
  