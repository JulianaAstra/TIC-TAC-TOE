let players = ['x', 'o'];
let activePlayer = 0;
let field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function startGame() {
    field = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    renderBoard(field);
    activePlayer = 0;
}

function togglePlayers() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else if (activePlayer === 1) {
        activePlayer = 0;
    }
}

function click(row, col) {
    field[row][col] = players[activePlayer];
    renderBoard(field);
    if (isWinner(field) === true) {
        showWinner(activePlayer);
    }
    togglePlayers();
}

function isWinner(field) {
            
    for (let i = 0; i < field.length; i++) {
        if (field[i][i] !== '' ) {
            if ((field[0][i] === field[1][i] && field[1][i] === field[2][i]) || (field[i][0] === field[i][1] && field[i][1] === field[i][2])) {   
                return true;
            } else if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) || (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
                return true;
            }
        }
    } 
    return false;
}