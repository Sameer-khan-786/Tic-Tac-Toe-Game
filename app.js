let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnX = true;  // playerX, playerO

const winningPattern = [
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,4,6],
	[2,5,8],
	[3,4,5],
	[6,7,8],
];

let count = 0;
for (let box of boxes) {
	box.addEventListener("click", () => {
		if (turnX) {  // player X
			box.innerText = "X";
			turnX = false;
		} else {   // Player O
			box.innerText = "O";
			turnX = true;
		}
		box.disabled = true;
		checkWinner();

		count++;
		if(count === 9){
			showDraw();
		}
	});
}; 



const checkWinner = () => {
	
	for (let pattern of winningPattern) {

		let pos1Val = boxes[pattern[0]].innerText;
		let pos2Val = boxes[pattern[1]].innerText;
		let pos3Val = boxes[pattern[2]].innerText;


		if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
			if(pos1Val === pos2Val && pos2Val === pos3Val){
				showWinner(pos1Val);
			}
		}
	}
};

const disableBtn = () => {
	for (let box of boxes) {
		box.disabled = true;
	}
}

const enableBtn = () => {
	for (let box of boxes) {
		box.disabled = false;
		box.innerText = "";
	}
}

const showWinner = (winner) => {
	msg.innerText = `Congrats, Winner is ${winner}`;
	msgContainer.classList.remove("hide");
	disableBtn();
}

const showDraw = () => {
	msg.innerText = `Match is a Draw, Play Again!`;
	msgContainer.classList.remove("hide");
	disableBtn();
}

const resetGame = () => {
	turnX = true;
	enableBtn();
	msgContainer.classList.add("hide");
	count = 0;
}

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);






