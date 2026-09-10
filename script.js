function createBoard() {
    let board = [[null,null,null],[null,null,null],[null,null,null]];

    function getBoard() {
        return board
    }

    function updateBoard(pos1, pos2, symbol) {
        if (board[pos1][pos2] === null) {
            board[pos1][pos2] = symbol
        };
        
        console.log(checkWin(pos1,pos2,symbol));

        console.log(board);
    }

    function restartBoard() {
        board = [[null,null,null],[null,null,null],[null,null,null]]
    }

    function checkWin(pos1, pos2, symbol) {
        let win = false;
        for (let i = 0; i < 3; i++){
            if (board[pos1][i] !== symbol) {
                break;
            };

            if (i === 2) {
                win = true;
            };
        };

        for (let i = 0; i < 3; i++){
            if (board[i][pos2] !== symbol) {
                break;
            };

            if (i === 2) {
                win = true;
            };
        };

        if (pos1 === 0 || pos1 === 2 || pos2 === 0 || pos2 === 2) {
            if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) {
                win = true;
            };
            if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) {
                win = true;
            };
        };

        return win;
    }

    return {getBoard, updateBoard, restartBoard};
}

function Player(symbol) {
    this.symbol = symbol;
    this.points = 0;
}

Player.prototype.win = function () {
    this.points ++;
}

function TicTacToeGame() {

}

const tictactoe = createBoard()

const player1 = new Player("x");

const player2 = new Player("O")