let counter;


function error(id,font) {
    counter = sessionStorage.getItem('counter');
    if(document.getElementById(id).style.backgroundColor == "pink"){
    document.getElementById(id).style.backgroundColor = "";
    sessionStorage.setItem('counter', counter+1);
    document.getElementById("score").innerHTML = sessionStorage.getItem('counter');
}
    else {
        document.getElementById(id).style.backgroundColor = "pink";
        sessionStorage.setItem('counter', counter-1);
        document.getElementById("score").innerHTML = sessionStorage.getItem('counter');
        sessionStorage.setItem('font1', font);
    }
    
    // document.getElementById("errortext").innerHTML = errortext;  
    
    
}

function success(id,font) {
    if(document.getElementById(id).style.backgroundColor == "lightgreen"){
        document.getElementById(id).style.backgroundColor = "";}
        else {document.getElementById(id).style.backgroundColor = "lightgreen";
        sessionStorage.setItem('font1', font);}
    document.getElementById("errortext").innerHTML = "כל הכבוד";        
    counter = sessionStorage.getItem('counter');
    sessionStorage.setItem('counter', counter*1+1);
    document.getElementById("score").innerHTML = sessionStorage.getItem('counter');
    
}
