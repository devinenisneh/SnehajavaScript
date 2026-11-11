const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let display = document.getElementById("display");
let displayCode = document.getElementById("display-code");

const generateColor = () => {
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    let randNo = Math.floor(Math.random() * 16);
    colorCode += arr[randNo];
  }
  display.style.backgroundColor = colorCode;
  displayCode.innerHTML = colorCode;
};

generateColor(); 