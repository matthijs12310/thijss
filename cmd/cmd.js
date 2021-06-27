function showIt() {
    document.getElementById("guest").style.visibility = "visible";
  }
setTimeout("showIt()", 1000);
function showIt2() {
    document.getElementById("demo").style.visibility = "visible";
  }
setTimeout("showIt2()", 1500);
function showIt3() {
  document.getElementById("matthijs").style.visibility = "visible";
}
setTimeout("showIt3()", 5000)

var i = 0;
var i2 = 0;
var txt = "./matthijs.tk"; /* The text */
var txt2 = "Loading... OK"
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typeWriter2() {
  if (i2 < txt.length) {
    document.getElementById("loading").innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(typeWriter2, speed);
  }
}
setTimeout("typeWriter2()", 4000)
setTimeout("typeWriter()", 2000);