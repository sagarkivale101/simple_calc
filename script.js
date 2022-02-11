let screen = document.getElementById("output-screen");

function disp(num) {
  screen.value += num;
}

function calc() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    alert(error.message);
  }
}

function cl() {asd
  screen.value = "";
}

function del() {
  screen.value = screen.value.slice(0, -1);
}