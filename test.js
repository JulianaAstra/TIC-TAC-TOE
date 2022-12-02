function isWinner(field) {
    let diagonally = field[1][1];        
    if (diagonally) {
      if ((field[0][0] === field[1][1] && field[1][1] === field[2][2]) || (field[0][2] === field[1][1] && field[1][1] === field[2][0])) {
            showWinner(winner);
          }
    } 
    for (let i = 0; i < field.length; i++) {
      if (field[i][i] !== 'i' ) {
        if ((field[0][i] === field[1][i] && field[1][i] === field[2][i]) || (field[i][0] === field[i][1] && field[i][1] === field[i][2])) {
            showWinner(winner);
        }
        }
    }
    return false;
}
        let board = [
        ['o', 'x', 'x'],
        ['', '', 'x'],
        ['x', 'o', 'x']
      ]
    
isWinner(board);
