const input = document.querySelector("#controls input");
const renderBoxBtn = document.querySelector('[data-action="render"]');
const destroyBoxBtn = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector("#boxes");

const inputChange = (elem) => {
  input.setAttribute("count", Number(elem.currentTarget.value));
};
input.addEventListener("input", inputChange);

let boxSizeStart = 30;

function randomColor() {
  return Math.floor(Math.random() * 256);
}

const createBox = () => {
  let countBox = Number(input.getAttribute("count"));

  for (let i = 0; i < countBox; i += 1) {
    boxSizeStart += 10;
    const newBox = document.createElement("div");
    newBox.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()} )`;
    newBox.style.height = `${boxSizeStart}px`;
    newBox.style.width = `${boxSizeStart}px`;
    newBox.classList.add("new-box");
    boxesEl.append(newBox);
  }
};
renderBoxBtn.addEventListener("click", createBox);

const deleteBox = () => {
  const allNewBoxes = document.querySelectorAll(".new-box");

  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  boxSizeStart = 30;
};

destroyBoxBtn.addEventListener("click", deleteBox);
