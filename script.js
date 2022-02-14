let screen = document.getElementById("output-screen");
document.onkeydown = function (e) {
 return false;
};
function disp(num) {
  screen.value += num;
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