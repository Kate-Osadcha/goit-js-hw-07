const inpuRangetEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector('#text');

const inputFontEl = () => {
    spanTextEl.style.fontSize = `${inpuRangetEl.value}px`;
};

inpuRangetEl.addEventListener("input", inputFontEl);


