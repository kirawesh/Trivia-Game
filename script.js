function click1() {
    document.getElementById("opensanshebrew").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
    document.getElementById("varelaround").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("amatic").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
    
}

function click2() {
    document.getElementById("rubik").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
    document.getElementById("varelaround").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("amatic").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
}

function click3() {
    document.getElementById("heebo").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("varelaround").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("amatic").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
}

function click4() {
    document.getElementById("varelaround").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("amatic").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
}

function click5() {
    document.getElementById("fredoka").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("varelaround").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("amatic").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
}

function click6() {
    document.getElementById("notosanshebrew").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("varelaround").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
    document.getElementById("amatic").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
}

function click7() {
    document.getElementById("amatic").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("varelaround").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
}

function click8() {
    document.getElementById("alef").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("varelaround").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("amatic").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
}


function keepcheck(id) {
    if(document.getElementById(id).style.backgroundColor == "rgb(165, 211, 235)"){
    document.getElementById(id).style.backgroundColor = "";
    }

    else {
        document.getElementById(id).style.backgroundColor = "rgb(165, 211, 235)";
    }
}

function disablebuttons() {
    var a = document.getElementsByName("check");
    var newvar = 0;
    var count;
  
    for (count = 0; count < a.length; count++) {
      if (a[count].checked == true) {
        newvar = newvar + 1;
      }
    }
  
    if (newvar >= 5) {
      document.getElementById("notvalid").innerHTML =
        "יש לבחור עד ארבעה אפשרויות";
      return false;
    }
    
      if (newvar >= 3) {
      document.getElementById("notvalid").innerHTML =
        "";
      return true;
    }
  }

// let counter;


// function error(id,font) {
//     counter = sessionStorage.getItem('counter');
//     if(document.getElementById(id).style.backgroundColor == "pink"){
//     document.getElementById(id).style.backgroundColor = "";
//     sessionStorage.setItem('counter', counter+1);
//     document.getElementById("score").innerHTML = sessionStorage.getItem('counter');
// }
//     else {
//         document.getElementById(id).style.backgroundColor = "pink";
//         sessionStorage.setItem('counter', counter-1);
//         document.getElementById("score").innerHTML = sessionStorage.getItem('counter');
//         sessionStorage.setItem('font1', font);
//     }
    
//     // document.getElementById("errortext").innerHTML = errortext;  
    
    
// }

// function success(id,font) {
//     if(document.getElementById(id).style.backgroundColor == "lightgreen"){
//         document.getElementById(id).style.backgroundColor = "";}
//         else {document.getElementById(id).style.backgroundColor = "lightgreen";
//         sessionStorage.setItem('font1', font);}
//     document.getElementById("errortext").innerHTML = "כל הכבוד";        
//     counter = sessionStorage.getItem('counter');
//     sessionStorage.setItem('counter', counter*1+1);
//     document.getElementById("score").innerHTML = sessionStorage.getItem('counter');
    
// }
