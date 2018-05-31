var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(255, 0, 255)",
"rgb(0, 255, 255)",
"rgb(0, 255, 0)",
"rgb(0, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var goalColor = colors[4];
var colorDisplay = document.querySelector("#goal");

for (var i = squares.length - 1; i >= 0; i--) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add eventListener to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === goalColor) {
			alert("Correct");
		}else{
			this.style.background = ("#232323");
		}
		});
	};

colorDisplay.textContent = goalColor;