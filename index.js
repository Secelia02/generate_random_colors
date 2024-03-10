let button = document.querySelector("button");


function backgroundColorChanges() {
  let number1 = Math.floor(Math.random() * 255);
  let number2 = Math.floor(Math.random() * 255);
  let number3 = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${number1} ${number2} ${number3})`;
}

button.addEventListener("click", backgroundColorChanges)

