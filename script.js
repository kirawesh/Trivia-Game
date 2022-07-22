// image font display //

function click1() {
    document.getElementById("opensanshebrew").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
    
}

function click2() {
    document.getElementById("rubik").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
}

function click3() {
    document.getElementById("heebo").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
}

function click4() {
    document.getElementById("fredoka").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
}

function click5() {
    document.getElementById("notosanshebrew").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
    document.getElementById("alef").style.display = 'none';
}

function click6() {
    document.getElementById("alef").style.display = 'block';
    document.getElementById("briefMockup").style.display = 'none';
    document.getElementById("opensanshebrew").style.display = 'none';
    document.getElementById("rubik").style.display = 'none';
    document.getElementById("fredoka").style.display = 'none';
    document.getElementById("notosanshebrew").style.display = 'none';
    document.getElementById("heebo").style.display = 'none';
}

// Game functions //

function keepcheck(id) {
    if(document.getElementById(id).style.backgroundColor == "blue"){
    document.getElementById(id).style.backgroundColor = "";
    }

    else {
        document.getElementById(id).style.backgroundColor = "blue";
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

function resetb(){
  // c = sessionStorage.getItem('totalScore');
sessionStorage.clear();
// sessionStorage.setItem('totalScore',c);

}

function resetImage(){
  c = sessionStorage.getItem('totalScore')
  sessionStorage.clear();
  if (c == null) 
    sessionStorage.setItem('totalScore', 0);
  else 
  sessionStorage.setItem('totalScore', c);
}

function myselect(id) {    

  if(sessionStorage.getItem(id)=='inline-block')
  {
    sessionStorage.setItem(id, '');
    sessionStorage.setItem('counterb',sessionStorage.getItem('counterb')*1-1);
    
  }
  else if (sessionStorage.getItem('counterb')*1==4){

  }
  else 
  {
    sessionStorage.setItem(id, 'inline-block');
    sessionStorage.setItem('counterb', sessionStorage.getItem('counterb')*1+1);
  }
  
}

// function resetCheck()
// {
//   sessionStorage.clear();
// }


function selectIMG(id)
{
  
  c = sessionStorage.getItem('totalScore')
  sessionStorage.clear();
  sessionStorage.setItem(id, 'inline-block');
  if (c == null) 
    sessionStorage.setItem('totalScore', 0);
  else 
  sessionStorage.setItem('totalScore', c);
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

function loadFontsModel(){
  fetch('fonts.json')
  .then(response => response.text())
  .then((data) => {
    sessionStorage.setItem("model", data);
  })
}
