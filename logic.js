let players = ['x', 'o'];
let activePlayer = 0;

let field;

function startGame() {
    field = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    activePlayer = 0;
    renderBoard(field);
}

function click(row, col) {
    field[row][col] = players[activePlayer];
    renderBoard(field);
    if (isWinner(field, row, col)) {
        showWinner(activePlayer);
    }
    activePlayer = (activePlayer === 0) ? 1 : 0;
}

function isWinner(board, rows, cols) {
    if ((board[rows][0] === players[activePlayer]) && 
        (board[rows][1] === players[activePlayer]) && 
        (board[rows][2] === players[activePlayer])) {
            return true;
    }

    if ((board[0][cols] === players[activePlayer]) && 
        (board[1][cols] === players[activePlayer]) && 
        (board[2][cols] === players[activePlayer])) {
            return true;
    }

    if ((board[0][0] === players[activePlayer]) && 
        (board[1][1] === players[activePlayer]) && 
        (board[2][2] === players[activePlayer])) {
            return true;
    }

    if ((board[0][2] === players[activePlayer]) && 
        (board[1][1] === players[activePlayer]) && 
        (board[2][0] === players[activePlayer])) {
            return true;
    }
}

// Here is my first solution of the test for the winner, before I learned about the reference solution of the problem (above)


// function isWinner(field) {
//     let diagonally = field[1][1];        
//     if (diagonally) {
//       if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) || (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
//         showWinner(activePlayer);
//       }
//     } 
//     for (let i = 0; i < field.length; i++) {
//       if (field[i][i] !== '' ) {
//         if ((field[0][i] === field[1][i] && field[1][i] === field[2][i]) || (field[i][0] === field[i][1] && field[i][1] === field[i][2])) {
//             showWinner(activePlayer);
//         }
//         }
//     }
//     return false;
// }