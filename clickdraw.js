/*
  Charles Weng
  SoftDev2 pd7
  K#00 -- I see a Red Door...
  K#01 -- It's About CONNECTION
  2018-2-5
*/


/*
  =======================================================================
                                  Variables/Initiation
  =======================================================================
*/

// canvas variable
const ctx = $('#slate')[0].getContext('2d');
// draw dot vs square
var dot = true;
// old point (x,y)
var old = [0,0];
// new graph?
var start = true;
// draw lines with black
ctx.strokeStyle ="#000000";


/*
  =======================================================================
                                  Functions
  =======================================================================
*/

// toggle function
const toggle = function(){
  dot = !dot;
}

// clear function
const clear = function(){
  // changing height/width of cnavas completely resets entire canvas
  start = true;
  $('#slate')[0].height = $('#slate')[0].height;
}

// draw function
const draw = function(e){
  e.preventDefault();
  if(dot){
    drawC(e);
    return;
  }
  drawR(e);
}

// draws a dot
const drawC = function(e){
  ctx.fillStyle ="#FF0000";
  ctx.beginPath();
  // if it's not the start of the path, then draw a line from old
  if(!start){
    ctx.moveTo(old[0], old[1]);
    ctx.lineTo(e.offsetX, e.offsetY);
    }
  // draw the circle
  ctx.moveTo(e.offsetX, e.offsetY);
  ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  // update variables
  old[0] = e.offsetX;
  old[1] = e.offsetY;
  start = false;
}

//draws a rectangle
const drawR = function(e){
  ctx.fillStyle="#00FF00";
  ctx.fillRect(e.offsetX - 20 , e.offsetY - 10, 40, 40);
}


/*
  =======================================================================
                                  Button Stuff
  =======================================================================
*/

// add event listenters
$('#toggle').click(toggle);
$('#clear').click(clear);
$('#slate').click(draw);
