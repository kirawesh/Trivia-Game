function error(id,errortext) {
    document.getElementById(id).style.backgroundColor = "pink";
    document.getElementById("errortext").innerHTML = errortext;
}

function success(id) {
    document.getElementById(id).style.backgroundColor = "lightgreen";
    document.getElementById("errortext").innerHTML = "כל הכבוד";
}