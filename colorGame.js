var colors = genereateColors(6);

var squares = document.querySelectorAll(".square");
var goalColor = pickedColor();
var colorDisplay = document.querySelector("#goal");
var gameStatus = document.querySelector("#gameStatus");
var banner = document.querySelector("h1");

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