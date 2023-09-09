document.addEventListener("DOMContentLoaded", () => {
	let squares = document.querySelectorAll(".square");

	squares.forEach((squares) => {
		squares.addEventListener("click", handleClick);
	});
});

function handleClick(event) {
	let square = event.target;
	let position = square.id;
	if (handleMove(position)) {
		setTimeout(() => {
			let player = document.getElementById("player");
			let gameOver = document.getElementById("gameOver")
			let Playerwin = vez_Do_Jogador != 0 ? "Player 1" : "Player 2";

			player.innerHTML = ` ${Playerwin} venceu`;
			gameOver.style.display = "flex";
		}, 500);
	}

	updateSquare(position);
}

function updateSquare(position) {
	let square = document.getElementById(position.toString());
	let simbols = board[position];
	square.innerHTML = `<div class="${simbols}"> </div>`;
}

function restartGame() {
	location.reload();
}
