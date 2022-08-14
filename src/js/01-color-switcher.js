const refs = {
    body: document.querySelector("body"),
    start: document.querySelector("[data-start]"),
    stop: document.querySelector("[data-stop]")
}

refs.start.addEventListener("click", changeBackgroundColor);
refs.stop.addEventListener("click", stopChangeBackgroundColor)

let intervalId

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function changeBackgroundColor() {
   intervalId = setInterval(colorChanger, 1000);
   refs.start.disabled = true;   
   refs.stop.disabled = false;   
}

function colorChanger() {
    let bgColor = getRandomHexColor()
    refs.body.style.backgroundColor = `${bgColor}`;
}  

function stopChangeBackgroundColor() {
    clearInterval(intervalId)
    refs.start.disabled = false; 
    refs.stop.disabled = true; 
}
