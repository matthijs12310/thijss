$('a').click(function(){
    $('ul').toggleClass('active');
  });

  let mylogo = document.getElementById('demo');
  let mylogo2 = document.getElementById('projects');
  document.getElementById('no').onclick = function(){
    mylogo.classList.toggle('fade');
    mylogo2.classList.toggle('fade');
    setTimeout("hidetext()", 500)
    $(".project1").fadeIn();
  }
  function hidetext(){
    mylogo.style.visibility = "hidden";
    mylogo2.style.visibility = "hidden";
  }
var i = 0;
var txt = 'Thijs.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();