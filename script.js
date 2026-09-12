function createBoard() {
    let board = [[null,null,null],[null,null,null],[null,null,null]];

    function getBoard() {
        return board
    }

    function updateBoard(pos1, pos2, symbol) {
        if (board[pos1][pos2] === null) {
            board[pos1][pos2] = symbol
        };

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

    return {getBoard, updateBoard, restartBoard, checkWin};
}

function Player(name, marker) {
    this.name = name
    this.marker = marker;
    this.points = 0;
}

Player.prototype.win = function() {
    this.points ++;
}

const tictactoeGame = (() => {
    let tictactoeBoard;
    let player1;
    let player2;

    const startGame = (p1Name, p2Name) => {
        tictactoeBoard = createBoard();

        player1 = new Player(p1Name,"x");

        player2 = new Player(p2Name, "o");
    };

    const playTurn = (pos, player) => {
        tictactoeBoard.updateBoard(pos[0], pos[1], player.marker)

        if (tictactoeBoard.checkWin(pos[0], pos[1], player.marker)) {
            console.log("win")
            player.win()
            tictactoeBoard.restartBoard()
            return true
        }

        return false
    }

    const playRound = (player1, player2) => {
        let turn = 0;
        let win = false;
        while (win === false) {
            const pos1 = +prompt("Enter pos1: ");
            const pos2 = +prompt("Enter pos2: ");

            win = playTurn([pos1, pos2], player1)
        }
    }

    const getPlayer1 = () => player1;
    const getPlayer2 = () => player2;
    const getGameBoard = () => tictactoeBoard; 

    return {getGameBoard, getPlayer1, getPlayer2, startGame, playRound};
})();

tictactoeGame.startGame("p1", "p2");
tictactoeGame.playRound(tictactoeGame.getPlayer1(), tictactoeGame.getPlayer2())

