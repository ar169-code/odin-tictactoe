function createBoard() {
    let board = [[null,null,null],[null,null,null],[null,null,null]];

    function getBoard() {
        return board
    }

    function updateBoard(pos1, pos2, symbol) {
        board[pos1][pos2] = symbol
    }

    function restartBoard() {
        board = [[null,null,null],[null,null,null],[null,null,null]]
    }

    function checkWin() {
        
    }

    return {getBoard, updateBoard, restartBoard};
}

function Player(symbol) {
    this.symbol = symbol;
    this.points = 0
}

Player.prototype.win = function () {
    this.points ++
}

function TicTacToeGame() {

}

const tictactoe = createBoard()

const player1 = new Player("x");

const player2 = new Player("O")