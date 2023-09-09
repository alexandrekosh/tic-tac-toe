//Iniciar as Variaveis
let board = ["", "", "", "", "", "", "", "", ""];
let vez_Do_Jogador = 0;
let simbols = ["O", "X"];
let gameOver = false;

let winStates = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function handleMove(position) {
	if (gameOver) {
		return;
	}

	if (board[position] == "") {
		board[position] = simbols[vez_Do_Jogador];

		gameOver = isWin();

		if (gameOver == false) {
			vez_Do_Jogador = vez_Do_Jogador == 0 ? 1 : 0;
		}
	}
	return gameOver;
}

function isWin() {
	for (let i = 0; i < winStates.length; i++) {
		let seq = winStates[i];
		let pos1 = seq[0];
		let pos2 = seq[1];
		let pos3 = seq[2];

		if (
			board[pos1] == board[pos2] &&
			board[pos1] == board[pos3] &&
			board[pos1] != ""
		) {
			return true;
		}
	}

	return false;
}
