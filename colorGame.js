var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var massageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");


colorDisplay.textContent = pickedColor ;

for(var i = 0 ; i < squares.length; i++ ){
    
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
        
        
        var clickedColor = this.style.backgroundColor;
        
        if(clickedColor === pickedColor){
            
           
            massageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again?";
            
        }
        else{
            
            this.style.backgroundColor = "#232323";
            massageDisplay.textContent = "Try Again";
        }
        
    })
    
}

resetButton.addEventListener("click", function(){
    
    resetButton.textContent = "New Colors!";
    
    h1.style.backgroundColor ="#232323";
    
    colors = generateRandomColors(6);
    
    pickedColor = pickColor();
    
    colorDisplay.textContent = pickedColor;
    
    for(var i = 0 ; i < squares.length; i++ ){
        
        squares[i].style.backgroundColor = colors[i];
    
}})

function changeColors(color){
    
    for(var i = 0 ; i < squares.length; i++){
        
        squares[i].style.backgroundColor = color;
        
    }
    
}

function pickColor(){
    
    var random = Math.floor(Math.random() * colors.length);
    
    return colors[random];
}

function generateRandomColors(num){
    
    
    var arr = [];
    
    for(var i = 0 ; i< num;i++){
        
        arr.push(randomColor());
        
    }
    
    return arr;
}

function randomColor(){
    
    
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);
    
    return ("rgb("+ red +", " + green + ", " + blue + ")"); 
}