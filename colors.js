const colors = ["yellow", "green", "blue", "red", "orange"];

function getColor() {
  return colors[Math.floor(Math.random()*colors.length)];
}

function setColor() {
    document.querySelector(':root').style.setProperty('--random-color', getColor());
}
