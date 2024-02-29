const min = 0;
const max = 255;

let randomNum1 = Math.floor(Math.random() * max) + min;
let randomNum2 = Math.floor(Math.random() * max) + min;
let randomNum3 = Math.floor(Math.random() * max) + min;

function newBackground() {
  let changeColor = document.getElementById("changeColor")
  changeColor.style.backgroundColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`
}