var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var massageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

colorDisplay.textContent = pickedColor ;

easyBtn.addEventListener("click", function(){
    numSquares=3;
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
   
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            
            squares[i].style.display = "none";
            
        }
        
    }
    
})

hardBtn.addEventListener("click", function(){
    numSquares=6;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
   
    for(var i = 0; i < squares.length; i++){
        
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display ="block";
        
    }
})

for(var i = 0 ; i < squares.length; i++ ){
    
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click", function(){
        
        
        var clickedColor = this.style.backgroundColor;
        
        if(clickedColor === pickedColor){
            
           
            massageDisplay.textContent = "Correct";
            changeColors(clickedColor);
         
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
    
 
    
    colors = generateRandomColors(numSquares);
    
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