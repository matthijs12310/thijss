function showIt() {
    document.getElementById("guest").style.visibility = "visible";
  }
setTimeout("showIt()", 1000); // after 1 sec
function showIt2() {
    document.getElementById("demo").style.visibility = "visible";
  }
setTimeout("showIt2()", 1500); // after 5 secs

var i = 0;
var txt = "./matthijs.tk"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
setTimeout("typeWriter()", 2000);