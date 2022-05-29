gameBoard = [];
player1Moves = [];
player2Moves = [];
let theWinner = "";

winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]

let round = 1;

const Players = (name, mark) => {
	return {name, mark};
}

let player1;
let player2;

const spots = document.querySelectorAll(".spot");
spots.forEach((spot) => {
	spot.addEventListener("click", () => {
		if (spot.innerText == "") {
			if (round % 2 == 0) {
				spot.classList.add("player2");
				spot.innerText = player2.mark;
				let location = spot.id;
				gameBoard.push(location);
				player2Moves.push(parseInt(location));
				round++;
			}
			else {
				spot.classList.add("player1");
				spot.innerText = player1.mark;
				let location = spot.id;
				gameBoard.push(location);
				player1Moves.push(parseInt(location));
				round++;
			}
			checkGame();
		}
	});
});

const modal = document.querySelector(".bg-modal");
const form = document.getElementById("start");
const name1 = document.getElementById("pname1");
const name2 = document.getElementById("pname2");

form.addEventListener("submit", () => {
	event.preventDefault();
	let player1name = document.getElementById("name1").value;
	let player2name = document.getElementById("name2").value;

	player1 = Players(player1name, "X");
	player2 = Players(player2name, "O");
	
	name1.innerText = player1.name;
	name2.innerText = player2.name;

	modal.style.display = "none";
	form.style.display = "none";

	form.reset();
});

const end = document.getElementById("end");
const winner = document.getElementById("winner");


function checkGame() {
	for (i = 0; i < winningCombos.length; i++) {
		if (winningCombos[i].every(element => player1Moves.includes(element))) {
			theWinner = player1.name;
			winner.innerText = theWinner +  " is the winner";
			modal.style.display = "flex";
			end.style.display = "grid";
		}
		else if (winningCombos[i].every(element => player2Moves.includes(element))) {
			theWinner = player2.name;
			winner.innerText = theWinner +  " is the winner";
			modal.style.display = "flex";
			end.style.display = "grid";
		}
	}
	if (round == 10 && theWinner === "") {
		winner.innerText = "Tie";
		modal.style.display = "flex";
		end.style.display = "grid";
	}
}





