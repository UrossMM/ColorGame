var num = 6;
var colors = randomColors(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var isPlay = false;

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.innerHTML = pickedColor;

var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton= document.querySelector("#reset");
var easyButton= document.querySelector("#easy");
var hardButton= document.querySelector("#hard");

easyButton.addEventListener("click", function(){
    num = 3;
    init(num);
    var squareHard= document.getElementsByClassName("hard");
    for(var i = 0; i < squareHard.length; i++)
    {
        squareHard[i].style.display = "none";
    }    
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    messageDisplay.innerHTML = "";

    if(isPlay)
        resetButton.innerHTML = "New colors";
})

hardButton.addEventListener("click", function(){
    num = 6;
    init(num);
    var squareHard= document.getElementsByClassName("hard");
    for(var i = 0; i < squareHard.length; i++)
    {
        squareHard[i].style.display = "block";
    }    
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    messageDisplay.innerHTML = "";

    if(isPlay)
        resetButton.innerHTML = "New colors";
})

resetButton.addEventListener("click", function(){
    init(num);
    messageDisplay.innerHTML = "";
    if(isPlay)
        this.innerHTML = "New colors";
})

for(var i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor == pickedColor)
        {
            messageDisplay.innerHTML= "Correct";
            h1.style.backgroundColor = pickedColor;
            resetButton.innerHTML = "Play again?";
            isPlay = true;
            for(var j = 0; j < num; j++)
            {
                squares[j].style.backgroundColor = pickedColor;
            }
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.innerHTML= "Try again";
        }
    })
}

function init(num){
    colors = randomColors(num);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for(var i = 0; i < num; i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor= "steelblue";
}

function pickColor(){
    var random = Math.floor(Math.random() * colors. length);
    return colors[random];
}

function randomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++)
    {
        var newColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256)  + ")";
        arr.push(newColor);
    }
    
    return arr;
}