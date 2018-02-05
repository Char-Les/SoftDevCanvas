/*
  Charles Weng
  SoftDev2 pd7
  K#00 -- I see a Red Door...
  2018-2-5
*/

// I don't know why, but the color isn't working for me :/

// initiate variables
const ctx = $('#slate')[0].getContext('2d');
var dot = false;

// toggle function
const toggle = function(){
  dot = !dot;
}

// clear function
const clear = function(){
  // changing height/width of cnavas resets entire canvas
  $('#slate')[0].height = "600";
}

// draw function
const draw = function(e){
  e.preventDefault();
  ctx.beginPath();
  if(dot){
    ctx.fillstyle="#00ff00";
    ctx.arc(e.offsetX - 5, e.offsetY - 5, 20, 0, 2 * Math.PI);
    ctx.fill();
    return;
  }
  ctx.fillstyle="#ff0000";
  ctx.fillRect(e.offsetX - 25 , e.offsetY - 25, 50, 50);
}


// add functions to button
$('#toggle').click(toggle);
$('#clear').click(clear);
$('#slate').click(draw);
