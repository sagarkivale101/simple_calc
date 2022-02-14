let screen = document.getElementById("output-screen");
document.onkeydown = function (e) {
 return false;
};

let op = '+-/*'
let ns = "1234567890";

function disp(num) {
  if(screen.value == '3.141592653589793' && num == '3.141592653589793'){
   alert('cannot enter π after π, Enter operator after π')
  }else if(screen.value == '3.141592653589793' && parseInt(num) >= 0 && parseInt(num) <=9 ){
  alert('Enter operator after π (+-*/)');
  }
  else{
    // console.log((parseInt(num)) );  
    screen.value += num;

    }
   
  
}

function rev(){
  var cosbtn = document.getElementById("cos");
  var sinbtn = document.getElementById("sin");
 
  var tanbtn = document.getElementById("tan");
  var cotbtn = document.getElementById("cot");
  


  if(sinbtn.value == "sin"){
   sinbtn.value = "sin^-1"
   sinbtn.innerHTML = "sin^-1"
   }else {
    sinbtn.value = "sin"
    sinbtn.innerHTML = "sin"
  }


  if(cosbtn.value == "cos"){
    cosbtn.value = "cos^-1"
    cosbtn.innerHTML = "cos^-1"
    }
    else {
      cosbtn.value = "cos"
      cosbtn.innerHTML = "cos"
   }


  if(tanbtn.value == "tan"){
    tanbtn.value = "tan^-1"
    tanbtn.innerHTML = "tan^-1"
    }else {
      tanbtn.value = "tan"
      tanbtn.innerHTML = "tan"
   }
 
   if(cotbtn.value == "cot"){
    cotbtn.value = "cot^-1"
    cotbtn.innerHTML = "cot^-1"
     }
     else {
      cotbtn.value = "cot"
      cotbtn.innerHTML = "cot"
    }
}



function dispneg(){
 
}

function calc() {
  var sinbtn = document.getElementById("sin");
  var tanbtn = document.getElementById("tan");
  var cosbtn = document.getElementById("cos");

  if(screen.value.slice(0,1) == '√'){
    
    var x =+screen.value.slice(1,)
    screen.value = (Math.sqrt(x));
  }else if(screen.value.includes('^') === true){
    var x = screen.value.indexOf('^')
    var a = screen.value.slice(0, x);
    var b = screen.value.slice(x+1, );
    screen.value = Math.pow(a, b);

  }else if(screen.value.slice(-1,) == '!'){
            var a =screen.value.slice(0, -1);
            var b = 1;
            for(var i = 1; i <= a; i++){
                b *= i;
              }
          
        screen.value = b

  }else if(screen.value.slice(0, 3) == 'cos' && cosbtn.value == "cos^-1"){
    
   screen.value = Math.acos(screen.value.slice(4, ))
  }else if(screen.value.slice(0, 3) == 'sin' && sinbtn.value == "sin^-1"){
    
    screen.value = Math.asin(screen.value.slice(4, ))
   }else if(screen.value.slice(0, 3) == 'tan' && tanbtn.value == "tan^-1"){
    console.log("atan");
    screen.value = Math.atan(screen.value.slice(4, ))
   }
  else if(screen.value.slice(0, 3) == 'cos'){
 
    screen.value = Math.cos(screen.value.slice(4, ))
  }
  else if(screen.value.slice(0, 3) == 'tan'){
 
    screen.value = Math.tan(screen.value.slice(4, ))
  }else if(screen.value.slice(0, 3) == 'sin'){
    
    screen.value = Math.sin(screen.value.slice(4, ))
  }
 
    
  
  else{
      try {
        screen.value = eval(screen.value);
      } catch (error) {
        alert(error.message);
      }
  }
}

function cl() {
  screen.value = "";
}

function del() {
  screen.value = screen.value.slice(0, -1);
}