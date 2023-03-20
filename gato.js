const board = [
    '', '', '',
    '', '', '',
    '', '', ''
];

let turn = 'X';
let winner = null;

const winningConditions = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('td');
const result = document.querySelector('#result');

function drawBoard() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = board[i];
        cells[i].addEventListener('click', handleCellClick, { once: true });
    }
}

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('id');

    if (board[index] !== '') {
        return;
    }

    board[index] = turn;
    cell.classList.add(turn === 'X' ? 'x' : 'o');
    cell.textContent = turn;
    winner = checkWinner();

    if (winner) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        turn = turn === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];

        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            highlightWinningCells(a, b, c);
            return board[a];
        }
    }

    return null;
}

function highlightWinningCells(a, b, c) {
    cells[a].classList.add('win');
    cells[b].classList.add('win');
    cells[c].classList.add('win');
}

function isDraw() {
    return board.every(cell => cell !== '');
}

function endGame(isDraw) {
    if (isDraw) {
        result.textContent = 'Empate!';
    } else {
        result.textContent = `${winner} gana!`;
    }

    cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
}

function restart() {
    board.fill('');
    turn = 'X';
    winner = null;
    result.textContent = '';
    cells.forEach(cell => {
        cell.classList.remove('x', 'o', 'win');
        cell.textContent = '';
        cell.addEventListener('click', handleCellClick, { once: true });
    });
}

drawBoard();
