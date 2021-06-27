function back() {
    $("#everything").fadeOut();
    setTimeout("back2()", 1500)
}
function back2() {
    window.location.replace("../index.html");
}