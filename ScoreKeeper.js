var numSquares = 6;
var colors = [];
var colorSelected;
var h1 = document.querySelector("h1");
var selectSquares = document.querySelectorAll(".square");
var pickedColor = document.getElementById("pickedColor");
var tryAgOrSuc = document.getElementById("tryOrSuc");
tryAgOrSuc.style.color = "black";
var ResetButt = document.getElementById("newCol");
var modeButton = document.querySelectorAll(".mode");
init();



function init(){
	setUpmodeButton();
	setUpSquares();	
	reset();
}



function setUpmodeButton(){
	for(var i=0;i< modeButton.length; i++){
			modeButton[i].addEventListener("click",function(){
					modeButton[0].classList.remove("selected");
					modeButton[1].classList.remove("selected");
					this.classList.add("selected");
					this.textContent === "Easy" ? numSquares =3 : numSquares = 6;
					reset();
			}
		);
	}
}


function setUpSquares(){
	for(var i =0;i<selectSquares.length;i++){
	
			var WinColor = selectSquares[i].style.background;
			selectSquares[i].addEventListener("click",function(){
			var clickedColor = this.style.background;
					if(clickedColor == colorSelected ){
							pickedColor.textContent =  clickedColor;
							changeColours(colorSelected);
							tryAgOrSuc.textContent="Win";
							WinColor[i] = colorSelected;
							h1.style.background = clickedColor;
							ResetButt.textContent = "Play Again?";
							}
					else{
							this.style.background = "#232323";
							tryAgOrSuc.textContent="try Again";
						}
			});
	}
}



function reset(){
			colors = generateRandomColors(numSquares);
			colorSelected = pickColor();
			pickedColor.textContent = colorSelected;
			ResetButt.textContent = "New colors";
			tryAgOrSuc.textContent = "";
			
				for(var i =0;i<selectSquares.length;i++){
					if(colors[i]){
						selectSquares[i].style.display = "block";
						selectSquares[i].style.background = colors[i];
				}else{
						selectSquares[i].style.display = "none";
				}
			h1.style.background = "steelblue";			

		}
	}


ResetButt.addEventListener("click",function(){
	reset();
	});



function changeColours(color){
			for(var i=0;i<selectSquares.length;i++){
				selectSquares[i].style.background = color;
			}
}
function pickColor(){
			var random = Math.floor(Math.random()* colors.length);
			return colors[random];
	}
function generateRandomColors(num){
		//Make array
		var arr = [];
		//add numRandom
		for(var i=0;i < num;i++){
			//get random Color and push to array
				arr.push(RandomColor());
		}
		//return
		return arr;
}
function RandomColor(){
			var red = Math.floor(Math.random() * 256);
			var blue = Math.floor(Math.random() * 256);
			var green = Math.floor(Math.random() * 256);
			return "rgb(" + red + ", " + green + ", " + blue + ")" ;
}		