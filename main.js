var mouseEvent = "";
var lastPotionOfX, lastPotionOfY;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var WidthOfTheLine = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    color = document.getElementById("color").value;
    WidthOfTheLine = document.getElementById("width").value;
    var currentPostitionOfMouseX = e.clientX - canvas.offsetLeft;
    var currentPostitionOfMouseY = e.clientY - canvas.offsetTop;
    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = WidthOfTheLine;
        console.log("Last Position Of X and Y Coordinates")
        console.log("x = "+ lastPotionOfX)
        console.log("y = "+ lastPotionOfY)
        ctx.moveTo(lastPotionOfX,lastPotionOfY);

        console.log("Current Postiion of X Coordinate is = "+currentPostitionOfMouseX+"Current Position Of Y is = "+currentPostitionOfMouseY);
        ctx.lineTo(currentPostitionOfMouseX,currentPostitionOfMouseY);
        ctx.stroke();
    }
    lastPotionOfX = currentPostitionOfMouseX;
    lastPotionOfY = currentPostitionOfMouseY;
}
function clear1() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    console.log("CLEARED")
}
