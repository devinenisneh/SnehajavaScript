let count = 0;
let display = document.getElementById("display");

const incCount = () => {
  count++;
  display.innerHTML = count;
};

const decCount = () => {
  if (count > 0) {
    count--;
  }
  display.innerHTML = count;
};