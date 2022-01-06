newFunction();
function newFunction() {
    document.getElementById("headertop").style.background = "#333";
}

document.getElementById("signin").onmouseover = function () { mouseOur() };
document.getElementById("signin").onmouseout = function () { mouseOut() };

function mouseOur() {
    document.getElementById("signin").style.color = "#00c8c8";
}

function mouseOut() {
    document.getElementById("signin").style.color = "#999999";
}



$("#empty").hover(function () {
    $(this).css("background", "#00c8c8").css("color", "#ffffff");
}, function () {
    $(this).css("background", "transparent").css("color", "#999999");

});



document.getElementById("currency").innerHTML = "Currency :";
document.getElementById("signin").innerHTML = " Register / SignIn";
