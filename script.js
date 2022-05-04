let counter;


function error(id,errortext) {
    document.getElementById(id).style.backgroundColor = "pink";
    document.getElementById("errortext").innerHTML = errortext;  
    counter = sessionStorage.getItem('counter');
    sessionStorage.setItem('counter', counter-1);
    document.getElementById("score").innerHTML = sessionStorage.getItem('counter');
}

function success(id) {
    document.getElementById(id).style.backgroundColor = "lightgreen";
    document.getElementById("errortext").innerHTML = "כל הכבוד";        
    counter = sessionStorage.getItem('counter');
    sessionStorage.setItem('counter', counter*1+1);
    document.getElementById("score").innerHTML = sessionStorage.getItem('counter');
}