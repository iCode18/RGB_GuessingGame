var gameMode = 6;
var colors = genereateColors(gameMode);

var squares = document.querySelectorAll(".square");
var goalColor = pickedColor();
var colorDisplay = document.querySelector("#goal");
var gameStatus = document.querySelector("#gameStatus");
var banner = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");



for (var i = squares.length - 1; i >= 0; i--) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add eventListener to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === goalColor) {
			gameStatus.textContent = "Correct!";
			changeColor(clickedColor);
			banner.style.background = clickedColor;
			resetButton.textContent = "Playe Again?";
		}else{
			gameStatus.textContent = "Try Again!";
			this.style.background = ("#232323");
		}
		});
	};

colorDisplay.textContent = goalColor;

function changeColor(color){
	//loop through all squares
	// change colors into given color
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = color;
	}
};

function pickedColor(){
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function genereateColors(num){
	var randomColors = [];
	for (var i = num - 1; i >= 0; i--) {
		randomColors.push(mathColors());
	}
	return randomColors;
};

function mathColors(){
	var Red = Math.floor(Math.random()*256);
	var Green = Math.floor(Math.random()*256);
	var Blue = Math.floor(Math.random()*256);
	return "rgb("+Red+", "+Green+", "+Blue+")";
}

resetButton.addEventListener("click", function(){
	this.textContent = "New Game";
	gameStatus.textContent = "";
	banner.style.background = "#232323";
	colors = genereateColors(gameMode);
	goalColor = pickedColor();
	colorDisplay.textContent = goalColor;
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = colors[i];
	}
});

easy.addEventListener("click", function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	gameMode = 3;
	colors = genereateColors(gameMode);
	goalColor = pickedColor();
	colorDisplay.textContent = goalColor;
	for (var i = squares.length - 1; i >= 0; i--) {
		if (colors[i]) {
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}
	}
});

hard.addEventListener("click", function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	gameMode = 6;
	colors = genereateColors(3);
	goalColor = pickedColor();
	colorDisplay.textContent = goalColor;
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});


