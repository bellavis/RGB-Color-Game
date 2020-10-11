let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let resetButton = document.querySelector("#reset");
let modeBtns = document.querySelectorAll(".mode")
let title = document.querySelector("#title");

init();

function init(){
	setUpModeBtns();
	setUpSquares();
	reset();
}

function setUpModeBtns(){
	for(var i = 0; i < modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			reset();
		});
	}	
}

function setUpSquares(){
	for(let i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
		let clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			title.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	title.style.backgroundColor = "#2B8BA4";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click", function() {
	reset();
});

function changeColors(color){
	for(let i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor (){
	let random = Math.floor(Math.random() * colors.length); // didn't understood why I did that!**
	return colors[random];
}

function generateRandomColors(num){
	let arr = []
	for (let i = 0; i  < num ; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	let r = Math.floor(Math.random() * 256); //random Red
	let g = Math.floor(Math.random() * 256); //random Green
	let b = Math.floor(Math.random() * 256); //random Blue
	return "rgb(" + r +", " + g + ", " + b +")";
}