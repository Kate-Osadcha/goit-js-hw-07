const inputArea = document.querySelector("#validation-input");

inputArea.addEventListener("blur", validArea);

function validArea() {
  const inputLength = this.dataset.length;

  if (Number(inputLength) === inputArea.value.length) {
    inputArea.classList.remove("invalid");
    inputArea.classList.add("valid");
  } else {
    inputArea.classList.remove("valid");
    inputArea.classList.add("invalid");
  }
}
