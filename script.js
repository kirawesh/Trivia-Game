let points = 0;

function error(id,errortext) {
    document.getElementById(id).style.backgroundColor = "pink";
    document.getElementById("errortext").innerHTML = errortext;
    points-=1;
    document.getElementById("score").innerHTML = points;
}

function success(id) {
    document.getElementById(id).style.backgroundColor = "lightgreen";
    document.getElementById("errortext").innerHTML = "כל הכבוד";
    points+=4;
    document.getElementById("score").innerHTML = points;
}