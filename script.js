const colorCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let display = document.getElementById("display");
let colorDisplay = document.getElementById("color-display");

const generateColor = () => {
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    let randNo = Math.floor(Math.random() * 16);
    colorCode += colorCodes[randNo];
  }
  display.style.backgroundColor = colorCode;
  colorDisplay.innerHTML = colorCode;
};

generateColor();