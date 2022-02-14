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

function myFunction() {

  var btn = document.getElementById("neg");
  
  if (btn.value == "--") {
      btn.value = "++";
      btn.innerHTML = "++";
  }
  else {
      btn.value = "--";
      btn.innerHTML = "--";
  }


}

function dispneg(){
  var btn = document.getElementById("neg");
  if(btn.value == "--"){
    screen.value += '-';
  }else{
    screen.value += '+';
    
  }
}

function calc() {
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

  }else{
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