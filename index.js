let button = document.querySelector("button");


function backgroundColorChanges() {
  let number = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${number} ${number} ${number})`;
}

button.addEventListener("click", backgroundColorChanges)

