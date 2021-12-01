var mouseEvent = "empty"
var lastpositionofX,lastpositionofY

var canvas =document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){

mouseEvent = "mousedown"
}

canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){

mouseEvent = "mouseup"
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){

mouseEvent = "mouseleave"
}

canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){

var current_postition_of_my_mouseX = e.clientX - canvas.offsetLeft
var current_postition_of_my_mouseY = e.clientY - canvas.offsetTop

if(mouseEvent == "mousedown")
{ctx.beginPath()
ctx.strokeStyle = "black";
ctx.lineWidth = "1";

ctx.moveTo(lastpositionofX, lastpositionofY)


ctx.lineTo(current_postition_of_my_mouseX,current_postition_of_my_mouseY)
ctx.stroke()
}
lastpositionofX = current_postition_of_my_mouseX
lastpositionofY = current_postition_of_my_mouseY
}