var colors=generateColors(6);
var squares=document.querySelectorAll(".square");
//var pickedColor= colors[3];
var pickedColor= pickColor(6);

var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor;
var h1=document.querySelector("h1");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click",function(){
    resetButton.textContent="New Colors!";
    messageDisplay.textContent="";

	colors=generateColors(6);
	//pickedColor=colors[3];
	pickedColor= pickColor(6);
	colorDisplay.textContent=pickedColor;
   
	for(var i=0;i<squares.length;i++)
	{
		// listener is everywhere!
		squares[i].style.background=colors[i];
	}
     h1.style.background="#232323";
	//alert("CLICKED RESET BUTTON")
}
);
for(var i=0;i<squares.length;i++)
{
	// add the initial color
	squares[i].style.background=colors[i];
	// add the listener
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;

		if(clickedColor==pickedColor)
		{
            resetButton.textContent="Play Again?";
			messageDisplay.textContent="Correct!";
			changeColor(clickedColor);
			h1.style.background=clickedColor;
		}
		else
		{

			this.style.background="#232323";
			messageDisplay.textContent="Try Again!";
		}
	});
}

function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}
function generateColors(num)
{
	var arr=[];
  for(var i=0;i<num;i++)
  	arr[i]=randomColor();
  return arr;
}
function randomColor()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function pickColor(num)
{
	var i=Math.floor(Math.random()*num);
	return colors[i];
}