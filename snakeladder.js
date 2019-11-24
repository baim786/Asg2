var position = [0,0];
var snake1 = 15;
var falltopos1 = 5;
var snake2 = 23;
var falltopos2 = 16;
var ladder1 = 8;
var climbtopos1 = 15;
var ladder2 = 19;
var climbtopos2 = 24;

function Roll(user){
    out = document.getElementById("output");
    rolldie = Math.floor(Math.random() * 6) + 1;
    position[user-1] += rolldie;
    var stumble = "";

switch(position[user-1]){
    case snake1:
      position[user-1] = falltopos1;
      stumble = ", you meet a snake, fall to position ";
      break;
    case snake2:
      position[user-1] = falltopos2;
      stumble = ", you meet a snake, fall to position ";
      break;
    case ladder1:
      position[user-1] = climbtopos1;
      stumble = ", you move to a ladder, advance to postion ";
      break;
    case ladder2:
      position[user-1] = climbtopos2;
      stumble = ", you move to a ladder, advance to postion ";
      break;
    default :
      stumble = ", move to position ";
      break;
}

if(position[user-1] > 25){
    out.textContent += "Player " + user + " WIN!!!";
    inps = document.getElementById("button1");
    inps.disabled = true;
    inps = document.getElementById("button2");
    inps.disabled = true;
}
else
out.textContent += "Player "+ user + " rolls...Die: " + rolldie + stumble + position[user-1] + "\n";
}
