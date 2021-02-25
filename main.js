var mouse_event="empty";
var last_x, last_y;
canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="red";
width=3;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color=document.getElementById("colour_input").value;
width=document.getElementById("width_input").value;
mouse_event="mousedown";}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseleave";}


canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouse_event="mouseUp";}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_x=e.clientX-canvas.offsetLeft;
current_y=e.clientY-canvas.offsetTop;
if (mouse_event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
console.log("Last position of X and Y coordinates are:");
console.log("X= "+last_x+" Y= "+last_y);
ctx.moveTo(last_x, last_y);
console.log("Current position of X and Y coordinates are:");
console.log("X= "+current_x+" Y= "+current_y);
ctx.lineTo(current_x, current_y);
ctx.stroke();}
last_x=current_x;   
last_y=current_y;}


    
    color = "black";
    width = 2;


var width= screen.width;
var height= screen.height;

var new_width= screen.width-70;
var new_height= screen.height-300;

if (width <992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";}


    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        color = document.getElementById("colour_input").value;
        width = document.getElementById("width_input").value;

        last_touch_x=e.touches[0].clientX-canvas.offsetLeft;
        last_touch_y=e.touches[0].clientY-canvas.offsetTop;
    }

    
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        
        ctx.moveTo(last_touch_x, last_touch_y);

        
        ctx.lineTo(current_touch_x, current_touch_y);
        ctx.stroke();
        

        last_touch_x = current_touch_x; 
        last_touch_y = current_touch_y;
    }


function erase(){
ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);




}






